import { Text, View } from "react-native";

import Logo from "@assets/logoipsum-295 1.svg";
import { Screen } from "@shared/components/Screen";

export function SplashScreen() {
  return (
    <Screen className="justify-center items-center">
      <View className="justify-center items-center gap-3">
        <View className="w-14 h-14">
          <Logo width={"100%"} height={"100%"} />
        </View>
        <Text className="text-white font-medium text-2xl tracking-wide">
          Lorem Ipsum
        </Text>
      </View>
    </Screen>
  );
}
