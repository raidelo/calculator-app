import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { Colors } from "@/constants/theme";

const RootLayout = () => {
  const [loaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
