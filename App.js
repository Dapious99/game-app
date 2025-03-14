import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const numberPickedHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    console.log("Number picked: ", selectedNumber);
  };

  let screen = <StartGame numberInputted={numberPickedHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={styles.defaultScreenLayout}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.defaultScreenLayout}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.defaultScreenLayout}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  defaultScreenLayout: { flex: 1 },
  backgroundImage: { opacity: 0.15 },
});
