import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToggleSwitch from "./ToggleSwitch";
import Color from "../../config/color"

interface SettingItemProps {
  label: string;
  value: boolean;
  onToggle: (value: boolean) => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ label, value, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ToggleSwitch isOn={value} onToggle={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    color: Color.white,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default SettingItem;
