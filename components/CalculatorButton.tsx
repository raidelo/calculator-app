import { Pressable, Text } from "react-native";

import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/theme";

type Props = {
  label: string;
  backgroundColor?: string;
  blackText?: boolean;
  doubleSize?: boolean;
};

export default function CalculatorButton({
  label,
  backgroundColor = Colors.darkGray,
  blackText = false,
  doubleSize = false,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: backgroundColor,
        width: doubleSize
          ? globalStyles.button.width * 2 +
            globalStyles.button.marginHorizontal * 2
          : globalStyles.button.width,
        opacity: pressed ? 0.8 : 1,
      })}
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
