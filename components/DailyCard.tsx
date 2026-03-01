import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { DailyCard as DailyCardType, LogEntry } from "../types";
import { useChildStore } from "../store/childStore";

interface DailyCardProps {
  card: DailyCardType;
}

export function DailyCard({ card }: DailyCardProps) {
  const { t } = useTranslation();
  const addLog = useChildStore((s) => s.addLog);
  const [logged, setLogged] = useState<LogEntry["result"] | null>(null);

  const handleLog = (result: LogEntry["result"]) => {
    if (logged) return; // Prevent double-logging
    addLog({
      cardId: card.id,
      date: new Date().toISOString(),
      result,
    });
    setLogged(result);
  };

  return (
    <View className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Card header */}
      <View className="bg-indigo-500 px-6 py-5">
        <Text className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-2">
          {t("home.daily_card.title")}
        </Text>
        <Text className="text-white text-xl font-bold leading-7">{card.skill}</Text>
        <View className="mt-3 flex-row items-center gap-2">
          <View className="bg-indigo-400 px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-medium">{card.category}</Text>
          </View>
        </View>
      </View>

      <View>
        {/* Why it matters */}
        <View className="px-6 pt-5 pb-4">
          <View className="flex-row items-center gap-2 mb-3">
            <Ionicons name="bulb-outline" size={16} color="#7FB4F9" />
            <Text className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
              {t("home.daily_card.why")}
            </Text>
          </View>
          <Text className="text-gray-700 text-sm leading-6">{card.whyItMatters}</Text>
        </View>

        {/* Steps */}
        <View className="px-6 pb-5">
          <View className="flex-row items-center gap-2 mb-3">
            <Ionicons name="list-outline" size={16} color="#7FB4F9" />
            <Text className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
              {t("home.daily_card.steps")}
            </Text>
          </View>
          <View className="gap-3">
            {card.steps.map((step, i) => (
              <View key={i} className="flex-row gap-3">
                <View className="w-6 h-6 rounded-full bg-indigo-50 items-center justify-center mt-0.5 shrink-0">
                  <Text className="text-indigo-600 text-xs font-bold">{i + 1}</Text>
                </View>
                <Text className="text-gray-700 text-sm leading-6 flex-1">{step}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Log buttons or logged state */}
        <View className="px-6 pb-6">
          {logged ? (
            <View className="bg-indigo-50 border border-indigo-200 py-4 rounded-xl items-center flex-row justify-center gap-2">
              <Ionicons
                name={logged === "success" ? "checkmark-circle" : logged === "partial" ? "time" : "arrow-forward-circle"}
                size={20}
                color="#7FB4F9"
              />
              <Text className="text-indigo-700 font-semibold text-sm">
                {logged === "success" ? "Great job! Logged." : logged === "partial" ? "Partial — keep going!" : "Skipped for today"}
              </Text>
            </View>
          ) : (
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => handleLog("success")}
                className="flex-1 bg-green-50 border border-green-200 py-3 rounded-xl items-center"
              >
                <Text className="text-green-700 font-semibold text-sm">
                  {t("home.daily_card.log_success")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleLog("partial")}
                className="flex-1 bg-amber-50 border border-amber-200 py-3 rounded-xl items-center"
              >
                <Text className="text-amber-700 font-semibold text-sm">
                  {t("home.daily_card.log_partial")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleLog("skip")}
                className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl items-center"
              >
                <Text className="text-gray-500 font-semibold text-sm">
                  {t("home.daily_card.log_skip")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
