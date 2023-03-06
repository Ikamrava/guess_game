import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";

import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartScreen onConfirmedNumber={pickedNumberHandler} />;
  if (!userNumber) {
    screen;
  } else if (gameOver) {
    screen = <GameOver />;
  } else {
    screen = (
      <GameScreen userNumber={userNumber} onGameover={gameOverHandler} />
    );
  }

  const image = {
    uri: "https://images.unsplash.com/photo-1596270893948-f493df7740f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView></SafeAreaView>
        {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6AAAB3",
  },

  rootScreen: {
    flex: 1,
  },
  ImageBackground: {},
});
