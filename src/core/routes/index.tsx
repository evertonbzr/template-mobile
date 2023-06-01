import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import { SplashScreen } from "@modules/splash/screens/SplashScreen";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RouteStack = createStackNavigator();

export function Routes() {
  return (
    <RouteStack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RouteStack.Screen name="splash" component={SplashScreen} />
    </RouteStack.Navigator>
  );
}
