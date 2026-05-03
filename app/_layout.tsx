import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { globalStyles } from "@/styles/global-styles";

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  const [loaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={[globalStyles.background, { paddingBottom: insets.bottom }]}>
      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
