import { Pressable, Text, View, StyleSheet } from "react-native";

function Button({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    flex: 1,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    elevation: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  pressed: {
    // for IOS as android_ripple for ripple_effect does not work here
    opacity: 0.75,
  },
});
