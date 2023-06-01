import { StyleProp, View, ViewStyle } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import classNames from "classnames";
import { useInsets } from "@core/hooks/useInsets";

export function Screen({
  children,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const containerClass = classNames("flex-1 bg-@gray-500");

  const { bottom, top } = useInsets();

  return (
    <View
      className={containerClass}
      style={[{ paddingTop: top, paddingBottom: bottom }, style]}
    >
      {children}
    </View>
  );
}
