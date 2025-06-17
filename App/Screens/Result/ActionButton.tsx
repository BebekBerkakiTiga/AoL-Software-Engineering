import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "../../config/color"

interface ActionButtonProps {
  label: string;
  onPress?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: Color.lightBlue,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
    color: Color.white,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default ActionButton;
