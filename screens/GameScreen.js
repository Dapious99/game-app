import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
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
