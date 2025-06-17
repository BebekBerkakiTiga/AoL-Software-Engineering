import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingItem from "./SettingItem";
import { useSettings } from "../../data/SettingsContext";
import Color from "../../config/color"

const SettingsScreen: React.FC = () => {
  const { settings, updateSetting } = useSettings();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <SettingItem
          label="Master Volume"
          value={settings.masterVolume}
          onToggle={(value) => updateSetting("masterVolume", value)}
        />
        <SettingItem
          label="Sound Effect"
          value={settings.soundEffect}
          onToggle={(value) => updateSetting("soundEffect", value)}
        />
        <SettingItem
          label="Music Volume"
          value={settings.musicVolume}
          onToggle={(value) => updateSetting("musicVolume", value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.lightBlue,
    backgroundColor: Color.darkBlue,
    padding: 20,
    width: "100%",
    maxWidth: 360,
  },
  title: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SettingsScreen;
