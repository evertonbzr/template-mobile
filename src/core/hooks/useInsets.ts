import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { Platform } from "react-native";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useInsets() {
  const { bottom, top } = useSafeAreaInsets();

  const insets = useMemo(() => {
    if (Platform.OS === "android") {
      return {
        top,
        bottom,
      };
    } else {
      return {
        top: getStatusBarHeight(),
        bottom: getBottomSpace(),
      };
    }
  }, []);
  return insets;
}
