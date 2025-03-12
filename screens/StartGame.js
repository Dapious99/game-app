import { Alert, StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";

function StartGame({ numberInputted }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberChange = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  const confirmNumberChange = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Number is invalid", "Number has to be between 1 and 99", [
        {
          text: "Close",
          style: "destructive",
          onPress: () => handleReset(),
        },
      ]);
      return;
    }
    console.log("Number is valid!!");
    numberInputted(chosenNumber);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textContainer}
        maxLength={2}
        // keyboardType="numeric"
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={handleNumberChange}
        // autoCapitalize="none" for non capitalizing text
        // autoCorrect={false} for curbing auto correct
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={handleReset}>Reset</Button>
        <Button onPress={confirmNumberChange}>Confirm</Button>
      </View>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#3b021f",
    elevation: 12,
    alignItems: "center",
    // Shadow properties are used for adding box-shadow in IOS development (shadow color for color shadowOffset:{width, height} for setting width and height of the shadow, shadow opacity)
  },
  textContainer: {
    // backgroundColor: "white",
    // borderRadius: 8,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 1,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 24,
    height: 50,
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: { flexDirection: "row", gap: 8 },
});
