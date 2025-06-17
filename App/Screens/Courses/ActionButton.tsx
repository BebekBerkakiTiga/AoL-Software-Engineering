import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Color from "../../config/color";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  width: '100%',
  height: 30,
  borderRadius: 12,
  backgroundColor: Color.lightBlue,
  justifyContent: 'center',
  alignItems: 'center',
},
  buttonText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ActionButton;
