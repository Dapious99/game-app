import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";

const generateRandomNumbers = (min, max, exclude) => {
  const randomNumbers = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumbers === exclude) {
    return generateRandomNumbers(min, max, exclude);
  } else {
    return randomNumbers;
  }
};

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumbers(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState();
  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <Text>Game Screen</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
