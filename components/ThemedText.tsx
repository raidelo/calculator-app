import { Text, TextProps } from "react-native";

import { globalStyles } from "@/styles/global-styles";

type Props = { variant: "main" | "sub" } & TextProps;

export default function ThemedText({ variant, children, ...rest }: Props) {
  return (
    <Text
      style={[
        { fontFamily: "JetBrainsMono" },
        variant === "main" && globalStyles.mainResult,
        variant === "sub" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
}
