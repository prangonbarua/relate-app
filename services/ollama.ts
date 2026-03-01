// Ollama/Qwen local AI service
// The simulator reaches the Mac's localhost directly via 127.0.0.1
// On a physical device use your Mac's LAN IP (e.g. 192.168.x.x:11434)

const OLLAMA_BASE = "http://127.0.0.1:11434";
const MODEL = "qwen2.5:7b";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Relate's AI assistant — a warm, knowledgeable companion for immigrant parents of autistic children.
You help with:
- Understanding autism diagnoses and what to expect
- Navigating school services (IEPs, 504 plans, special education rights)
- Government resources (Regional Centers, Medi-Cal, SSI)
- Teaching practical daily-living and communication skills at home
- Emotional support and encouragement

Always be:
- Warm, patient, and non-judgmental
- Clear and simple — many users are non-native English speakers
- Honest about the limits of your knowledge and when to seek professional help
- Brief — keep responses focused and scannable

You do NOT provide medical diagnoses.`;

export async function streamChat(
  messages: Message[],
  onChunk: (text: string) => void,
  onDone: () => void,
  onError: (err: string) => void,
  signal?: AbortSignal
): Promise<void> {
  const body = JSON.stringify({
    model: MODEL,
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
  });

  let response: Response;
  try {
    response = await fetch(`${OLLAMA_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      signal,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    onError(
      msg.includes("Network request failed") || msg.includes("Failed to fetch")
        ? "Cannot reach Ollama. Make sure it is running on your Mac."
        : msg
    );
    return;
  }

  if (!response.ok) {
    if (response.status === 404) {
      onError(`Model "${MODEL}" not found. Run: ollama pull ${MODEL}`);
    } else {
      onError(`Ollama error: ${response.status}`);
    }
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    onError("No response body from Ollama.");
    return;
  }

  const decoder = new TextDecoder();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const lines = decoder.decode(value, { stream: true }).split("\n");
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const json = JSON.parse(line) as {
            message?: { content?: string };
            done?: boolean;
          };
          if (json.message?.content) {
            onChunk(json.message.content);
          }
          if (json.done) {
            onDone();
            return;
          }
        } catch {
          // partial JSON chunk — skip
        }
      }
    }
    onDone();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg !== "AbortError") onError(msg);
  } finally {
    reader.releaseLock();
  }
}

export async function checkOllamaHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${OLLAMA_BASE}/api/tags`, { signal: AbortSignal.timeout(3000) });
    return res.ok;
  } catch {
    return false;
  }
}
