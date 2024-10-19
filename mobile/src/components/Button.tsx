import { TouchableHighlight, Text, StyleSheet } from "react-native";

export default function Button() {
  return (
    <TouchableHighlight>
      <Text style={styles.buttonText}>Press Me!</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    backgroundColor: '#aa0505cd',
    borderRadius: 5,
  }
})
