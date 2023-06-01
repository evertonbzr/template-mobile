import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useAppScreen } from "@src/core/hooks/useAppScreen";

export default function App() {
  const { appIsReady, onLayoutRootView } = useAppScreen();

  if (!appIsReady) {
    return null;
  }
  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <StatusBar style="light" translucent />
    </View>
  );
}
