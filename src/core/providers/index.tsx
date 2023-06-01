import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import { SafeAreaProvider } from "react-native-safe-area-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: "transparent",
          },
        }}
      >
        {children}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
