import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import Color from "../../config/color"

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onToggle(!isOn)}>
      <View style={[styles.switch, isOn ? styles.onBackground : styles.offBackground]}>
        <Animated.View
          style={[
            styles.thumb,
            isOn ? styles.thumbOn : styles.thumbOff,
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 50,
    height: 28,
    borderRadius: 28 / 2,
    padding: 2,
    justifyContent: "center",
  },
  onBackground: {
    backgroundColor: "#6C63FF",
    alignItems: "flex-end",
  },
  offBackground: {
    backgroundColor: "#999",
    alignItems: "flex-start",
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Color.white,
    shadowColor: Color.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbOn: {
    transform: [{ translateX: 0 }],
  },
  thumbOff: {
    transform: [{ translateX: 0 }],
  },
});

export default ToggleSwitch;
