import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    color: "#ddb52f",
    borderWidth: 1,
    borderColor: "#ddb52f",
  },
});
