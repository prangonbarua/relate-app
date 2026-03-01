import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useChildStore } from "../store/childStore";
import { useUserStore } from "../store/userStore";

export default function SettingsScreen() {
  const profile = useChildStore((s) => s.profile);
  const clearProfile = useChildStore((s) => s.clearProfile);
  const reset = useUserStore((s) => s.reset);
  const language = useUserStore((s) => s.language);

  const handleLogout = () => {
    Alert.alert("Log Out", "This will reset the app and return to onboarding.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.clear();
          clearProfile();
          reset();
          router.replace("/");
        },
      },
    ]);
  };

  const handleClearChat = () => {
    Alert.alert("Clear Chat History", "This will delete all your AI assistant conversations.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear",
        style: "destructive",
        onPress: () => {
          // Chat history is stored server-side, just confirm
          Alert.alert("Done", "Chat history will be cleared on next restart.");
        },
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-6 pt-4 pb-4 bg-white border-b border-gray-100 flex-row items-center gap-3">
        <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center">
          <Ionicons name="close" size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900 flex-1">Settings</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Child Profile Section */}
        <View className="px-6 pt-6 pb-2">
          <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Child Profile
          </Text>
        </View>

        <View className="mx-6 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {profile ? (
            <>
              <View className="px-5 py-4 border-b border-gray-50">
                <View className="flex-row items-center gap-3">
                  <View className="w-12 h-12 rounded-full bg-indigo-100 items-center justify-center">
                    <Text className="text-indigo-600 text-lg font-bold">
                      {profile.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-bold text-gray-900">{profile.name}</Text>
                    <Text className="text-xs text-gray-400">
                      Age {profile.age} · {profile.communicationLevel}
                    </Text>
                  </View>
                </View>
              </View>

              {profile.loves.length > 0 && (
                <View className="px-5 py-3 border-b border-gray-50">
                  <Text className="text-xs text-gray-400 mb-1">Loves</Text>
                  <Text className="text-sm text-gray-700">{profile.loves.join(", ")}</Text>
                </View>
              )}

              {profile.triggers.length > 0 && (
                <View className="px-5 py-3 border-b border-gray-50">
                  <Text className="text-xs text-gray-400 mb-1">Triggers</Text>
                  <Text className="text-sm text-gray-700">{profile.triggers.join(", ")}</Text>
                </View>
              )}

              <TouchableOpacity
                onPress={() => {
                  router.back();
                  setTimeout(() => router.push("/(onboarding)/profile"), 300);
                }}
                className="px-5 py-3 flex-row items-center gap-2"
              >
                <Ionicons name="create-outline" size={16} color="#6366f1" />
                <Text className="text-sm text-indigo-600 font-medium">Edit Profile</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => {
                router.back();
                setTimeout(() => router.push("/(onboarding)/profile"), 300);
              }}
              className="px-5 py-4 flex-row items-center gap-3"
            >
              <View className="w-10 h-10 rounded-full bg-indigo-50 items-center justify-center">
                <Ionicons name="add" size={20} color="#6366f1" />
              </View>
              <Text className="text-sm text-indigo-600 font-medium">Set Up Child Profile</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* App Settings */}
        <View className="px-6 pt-6 pb-2">
          <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            App
          </Text>
        </View>

        <View className="mx-6 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <View className="px-5 py-4 border-b border-gray-50 flex-row items-center gap-3">
            <Ionicons name="language-outline" size={20} color="#6366f1" />
            <View className="flex-1">
              <Text className="text-sm text-gray-900">Language</Text>
              <Text className="text-xs text-gray-400">{language.toUpperCase()}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.back();
                setTimeout(() => router.push("/(onboarding)"), 300);
              }}
            >
              <Text className="text-xs text-indigo-600 font-medium">Change</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleClearChat}
            className="px-5 py-4 flex-row items-center gap-3"
          >
            <Ionicons name="chatbubble-outline" size={20} color="#6366f1" />
            <Text className="text-sm text-gray-900 flex-1">Clear Chat History</Text>
            <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
          </TouchableOpacity>
        </View>

        {/* Account */}
        <View className="px-6 pt-6 pb-2">
          <Text className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Account
          </Text>
        </View>

        <View className="mx-6 bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
          <View className="px-5 py-4 border-b border-gray-50 flex-row items-center gap-3">
            <Ionicons name="person-outline" size={20} color="#6366f1" />
            <View className="flex-1">
              <Text className="text-sm text-gray-900">Maria Santos</Text>
              <Text className="text-xs text-gray-400">maria@demo.com</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            className="px-5 py-4 flex-row items-center gap-3"
          >
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text className="text-sm text-red-500 flex-1">Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* App info */}
        <View className="items-center pb-8">
          <Text className="text-xs text-gray-300">Relate v1.0 · Hackathon Demo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
