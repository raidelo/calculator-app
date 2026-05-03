import { View, ViewProps } from "react-native";

import { globalStyles } from "@/styles/global-styles";

export default function ButtonRow({ children, ...rest }: ViewProps) {
  return (
    <View {...rest} style={globalStyles.row}>
      {children}
    </View>
  );
}
