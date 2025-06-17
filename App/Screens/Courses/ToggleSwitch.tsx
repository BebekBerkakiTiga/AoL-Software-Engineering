import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from "../../config/color";

interface ToggleSwitchProps {
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, isEnabled, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: isEnabled ? Color.lightBlue : Color.gray }
        ]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.toggleCircle,
            isEnabled ? styles.toggleRight : styles.toggleLeft
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 193,
    height: 30,
    borderRadius: 12,
    backgroundColor: Color.gradientStart,
    paddingLeft: 18,
    paddingRight: 18,
  },
  label: {
    color: Color.white,
    fontSize: 10,
    fontWeight: '600',
  },
  toggleContainer: {
    width: 33,
    height: 20,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
  },
  toggleCircle: {
    width: 15,
    height: 15,
    borderRadius: 24,
    backgroundColor: Color.white,
  },
  toggleRight: {
    alignSelf: 'flex-end',
  },
  toggleLeft: {
    alignSelf: 'flex-start',
  },
});

export default ToggleSwitch;
