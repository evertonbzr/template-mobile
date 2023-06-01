import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";

import { Providers } from "@core/providers";
import { Routes } from "@core/routes";
import { Screen } from "@shared/components/Screen";
import { StatusBar } from "expo-status-bar";
import { useAppScreen } from "@core/hooks/useAppScreen";

export default function App() {
  const { appIsReady, onLayoutRootView } = useAppScreen();

  if (!appIsReady) {
    return null;
  }
  return (
    <View className="flex-1" onLayout={onLayoutRootView}>
      <Providers>
        <StatusBar style="light" translucent />
        <Routes />
      </Providers>
    </View>
  );
}
