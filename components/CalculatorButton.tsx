import { Pressable, Text } from "react-native";

import * as Haptics from "expo-haptics";

import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/theme";
import {
  BUTTON_ASPECT_RATIO,
  BUTTON_DEFAULT_FLEX,
  BUTTON_GAP,
  BUTTON_MAX_RADIUS,
} from "@/constants/button";

type Props = {
  label: string;
  size?: number;
  backgroundColor?: string;
  blackText?: boolean;
  onPress?: () => void;
};

export default function CalculatorButton({
  label,
  size = BUTTON_DEFAULT_FLEX,
  backgroundColor = Colors.darkGray,
  blackText = false,
  onPress = () => {},
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        maxWidth: BUTTON_MAX_RADIUS * size + BUTTON_GAP * (size - 1),
        maxHeight: BUTTON_MAX_RADIUS,
        borderRadius: BUTTON_MAX_RADIUS / 2,
        aspectRatio: BUTTON_ASPECT_RATIO * size,
        backgroundColor: backgroundColor,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={
        onPress
          ? () => {
              Haptics.selectionAsync();

              onPress();
            }
          : undefined
      }
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
