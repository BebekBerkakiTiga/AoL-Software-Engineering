import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Color from '../../config/color';

export const InputField = ({
  label,
  value,
  isPassword = false,
  showIcon = false,
  iconUrl,
  onIconPress,
}) => (
  <View style={inputStyles.container}>
    {label && <Text style={inputStyles.labelText}>{label}</Text>}
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.inputText}>{value}</Text>
      {showIcon && iconUrl && (
        <TouchableOpacity onPress={onIconPress}>
          <Image source={iconUrl} style={inputStyles.icon} />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const inputStyles = StyleSheet.create({
  container: { marginTop: 8 },
  labelText: {
    color: Color.white,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 36,
  },
  inputContainer: {
    backgroundColor: "#3D2075",
    borderRadius: 12,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: Color.lightBlue,
  },
  inputText: {
    color: Color.white,
    fontSize: 12,
    fontWeight: "400",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: "#BBB",
  },
});

export const ToggleSwitch = ({ isOn, onToggle }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onToggle}
    style={{
      borderRadius: 100,
      height: 20,
      flex: 1,
      paddingLeft: isOn ? 4 : 0,
      paddingRight: isOn ? 0 : 4,
    }}
  >
    <View style={{ height: 28, width: 30, justifyContent: "center", alignItems: "center" }}>
      <View style={{
        borderRadius: 100,
        width: 31,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <View style={{
          borderRadius: 24,
          width: "100%",
          height: 15,
          backgroundColor: isOn ? Color.lightBlue : Color.white,
        }} />
      </View>
    </View>
  </TouchableOpacity>
);

export const ToggleOption = ({ label, isOn, onToggle }) => (
  <View style={toggleStyles.container}>
    <Text style={toggleStyles.label}>{label}</Text>
    <ToggleSwitch isOn={isOn} onToggle={onToggle} />
  </View>
);

const toggleStyles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginTop: 10,
    width: "100%",
    paddingLeft: 30,
    paddingRight: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: Color.white,
    fontSize: 10,
    fontWeight: "600",
    lineHeight: 36,
  },
});

export const ProfileSection = ({ avatarUrl, username, role }) => (
  <View style={profileStyles.container}>
    <View style={profileStyles.avatarContainer}>
      <Image source={avatarUrl} style={profileStyles.avatarImage} />
    </View>
    <Text style={profileStyles.usernameLabel}>Username: </Text>
    <Text style={profileStyles.nameText}>{username}</Text>
    <Text style={profileStyles.roleText}>{role}</Text>
  </View>
);

const profileStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  avatarContainer: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Color.lightBlue,
    padding: 7,
    width: 67,
    height: 67,
    backgroundColor: Color.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 52,
    height: 52,
    resizeMode: "contain",
  },
  usernameLabel: {
    color: Color.white,
    fontSize: 12,
    fontWeight: "700",
  },
  nameText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "700",
  },
  roleText: {
    color: "#B4A4DB",
    fontSize: 14,
    fontWeight: "400",
  },
});

export const SettingsHeader = ({ imageUrl }) => (
  <View style={headerStyles.container}>
    <Image source={imageUrl} style={headerStyles.image} />
    <Text style={headerStyles.title}>Settings</Text>
  </View>
);

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    color: Color.white,
    fontWeight: "700",
  },
});
