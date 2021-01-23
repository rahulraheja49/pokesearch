import React, { useState } from "react";
import { View, Platform } from "react-native";
import Landing from "./src/Landing";
import Search from "./src/Search";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");

  switchScreenHandler = (currentScreen) => {
    setCurrentScreen(currentScreen);
  };

  let screen = <Landing switchScreen={switchScreenHandler} />;

  if (currentScreen === "landing") {
    screen = <Landing switchScreen={switchScreenHandler} />;
  } else if (currentScreen === "search") {
    screen = <Search />;
  }

  return <View style={styles.container}>{screen}</View>;
}

const styles = {
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 24 : 0,
  },
};
