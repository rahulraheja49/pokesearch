import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { Button } from "native-base";

var myBackground = require("../assets/landing.jpg");

const Landing = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={myBackground}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
          <Button
            block={true}
            style={styles.buttonStyle}
            onPress={() => props.switchScreen("search")}
          >
            <Text style={styles.buttonText}>Start Searching</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center",
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
};

export default Landing;
