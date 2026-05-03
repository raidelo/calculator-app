import { Slot } from "expo-router";
import { View, Text } from "react-native";

import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMonoNLNerdFontMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View>
      <Text>RootLayout</Text>
      <Slot />
    </View>
  );
};

export default RootLayout;
