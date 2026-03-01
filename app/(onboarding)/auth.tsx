import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/authStore";
import { useUserStore } from "../../store/userStore";
import { Colors, Radius, Shadow } from "../../constants/theme";

export default function AuthScreen() {
  const { t } = useTranslation();
  const language = useUserStore((s) => s.language);
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);

  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    if (mode === "signup" && !name.trim()) {
      Alert.alert("", "Please enter your name.");
      return;
    }
    if (!email.trim()) {
      Alert.alert("", "Please enter your email.");
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert("", "Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    try {
      if (mode === "signup") {
        await register(name.trim(), email.trim().toLowerCase(), password, language);
      } else {
        await login(email.trim().toLowerCase(), password);
      }
      router.push("/(onboarding)/track");
    } catch (error: any) {
      Alert.alert("", error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.textSecondary} />
          </TouchableOpacity>

          {/* Logo / Header */}
          <View style={styles.headerSection}>
            <View style={styles.logoCircle}>
              <Ionicons name="heart" size={32} color={Colors.primary} />
            </View>
            <Text style={styles.appName}>Relate</Text>
            <Text style={styles.tagline}>
              {mode === "signup"
                ? "Create your account to get started"
                : "Welcome back"}
            </Text>
          </View>

          {/* Mode toggle */}
          <View style={styles.toggleRow}>
            <TouchableOpacity
              onPress={() => setMode("signup")}
              style={[
                styles.toggleButton,
                mode === "signup" && styles.toggleButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  mode === "signup" && styles.toggleTextActive,
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMode("login")}
              style={[
                styles.toggleButton,
                mode === "login" && styles.toggleButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.toggleText,
                  mode === "login" && styles.toggleTextActive,
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {mode === "signup" && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="e.g. Maria"
                  placeholderTextColor={Colors.textMuted}
                  autoCapitalize="words"
                  style={styles.input}
                />
              </View>
            )}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="email@example.com"
                placeholderTextColor={Colors.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="At least 6 characters"
                  placeholderTextColor={Colors.textMuted}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  style={[styles.input, { flex: 1, marginBottom: 0 }]}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color={Colors.textMuted}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Submit */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isLoading}
            style={[styles.submitButton, isLoading && { opacity: 0.7 }]}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.submitText}>
                {mode === "signup" ? "Create Account" : "Log In"}
              </Text>
            )}
          </TouchableOpacity>

          {/* Switch mode */}
          <TouchableOpacity
            onPress={() => setMode(mode === "signup" ? "login" : "signup")}
            style={styles.switchRow}
          >
            <Text style={styles.switchText}>
              {mode === "signup"
                ? "Already have an account? "
                : "Don't have an account? "}
              <Text style={styles.switchLink}>
                {mode === "signup" ? "Log In" : "Sign Up"}
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: Colors.background,
    marginBottom: 16,
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 4,
  },
  tagline: {
    fontSize: 15,
    color: Colors.textSecondary,
  },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderRadius: Radius.md,
    padding: 4,
    marginBottom: 24,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: Radius.sm,
    alignItems: "center",
  },
  toggleButtonActive: {
    backgroundColor: Colors.primary,
    ...Shadow.soft,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  toggleTextActive: {
    color: "#FFFFFF",
  },
  form: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    borderRadius: Radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.text,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  eyeButton: {
    padding: 12,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
    marginBottom: 16,
    ...Shadow.soft,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  switchRow: {
    alignItems: "center",
    paddingVertical: 8,
  },
  switchText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  switchLink: {
    color: Colors.primary,
    fontWeight: "600",
  },
});
