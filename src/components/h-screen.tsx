import { FC, ReactNode } from "react";
import { View } from "react-native";

interface HScreen {
  children: ReactNode,
  className?: string
}

export const HScreen: FC<HScreen> = ({ children, className }) => (
  <View className={`flex flex-1 flex-col ${className}`}>
    {children}
  </View>
)