import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [rounds, setRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sensR": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sensB": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  function startNewGame() {
    setUserNumber(null);
    setGameOver(false);
    setRounds(0);
    console.log(rounds);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(roundNumbers) {
    setGameOver(true);
    setRounds(roundNumbers);
  }

  let screen = <StartScreen onConfirmedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameover={gameOverHandler} />
    );
  }

  if (!userNumber) {
    screen;
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={rounds}
        restartHandler={startNewGame}
      />
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
