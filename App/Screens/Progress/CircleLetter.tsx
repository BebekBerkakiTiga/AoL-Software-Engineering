import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../config/color"

interface CircleLetterProps {
  letter: string;
}

const CircleLetter: React.FC<CircleLetterProps> = ({ letter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 26843500, // Very large number to ensure perfect circle
    width: 38,
    height: 38,
    minHeight: 38,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lightBlue,
  },
  letter: {
    fontSize: 17,
    lineHeight: 36,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default CircleLetter;
