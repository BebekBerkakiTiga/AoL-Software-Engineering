import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useUserContext } from "../../data/UserContext";
import { ProfileSection, InputField } from "./UIComponents";
import SettingItem from "../Setting/SettingItem";
import Headerr from "../HeaderFooter/Header";
import BottomNavbar from "../HeaderFooter/BottomNavbar";
import { useSettings } from "../../data/SettingsContext";
import Color from "../../config/color";

const ProfileScreen = () => {
  const { currentUser } = useUserContext();
  const { settings, updateSetting } = useSettings();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["#1C0436", "#510C9C"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <Headerr />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <ProfileSection
            avatarUrl={require("../../Assets/Icon/profile.png")}
            username={currentUser?.username ?? "Guest"}
            role="Expert Math"
          />

          <View style={styles.inputGroup}>
            <InputField
              label="Username:"
              value={currentUser?.username ?? "-"}
            />
            <InputField label="Fullname:" value={currentUser?.email ?? "-"} />
            <InputField
              label="Password:"
              value={
                showPassword ? currentUser?.password ?? "" : "************"
              }
              isPassword={!showPassword}
              showIcon={true}
              iconUrl={
                showPassword
                  ? require("../../Assets/Icon/view.png")
                  : require("../../Assets/Icon/hide.png")
              }
              onIconPress={() => setShowPassword(!showPassword)}
            />
            <InputField label="Country:" value={currentUser?.country ?? "-"} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.settingsTitle}>Settings</Text>

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
      </ScrollView>

      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingTop: 120,
    paddingBottom: 70,
  },
  card: {
    borderRadius: 20,
    backgroundColor: Color.darkBlue,
    padding: 17,
    marginBottom: 20,
    width: "100%",
    maxWidth: 360,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderColor: Color.lightBlue,
    borderWidth: 2,
  },
  inputGroup: {
    marginTop: 30,
    gap: 14,
  },
  settingsTitle: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ProfileScreen;
