import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import SettingsScreen from "../Setting/SettingsScreen";
import Color from "../../config/color";

const Headerr: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={stylesHeader.header}>
        <Image
          source={require("../../Assets/Logo/LogoMathzizzMax.png")}
          style={stylesHeader.profileImage}
        />
        <View style={stylesHeader.usernameContainer}>
          <Text style={stylesHeader.usernameText}>Mathzizz</Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={stylesHeader.settingContainer}
        >
          <Image
            source={require("../../Assets/Icon/Setting.png")}
            style={stylesHeader.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill}>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
          />
        </BlurView>
        <View style={stylesHeader.modalContent}>
          <SettingsScreen />
        </View>
      </Modal>
    </>
  );
};

const stylesHeader = StyleSheet.create({
  modalContent: {
    position: "absolute",
    top: "25%",
    left: 20,
    right: 20,
    zIndex: 999,
  },
  header: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 10,
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 64,
    backgroundColor: Color.darkBlue,
    paddingLeft: 18,
    paddingRight: 18,
  },
  profileImage: {
    width: 43,
    height: 43,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: Color.darkBlue,
  },
  usernameContainer: {
    marginLeft: 18,
  },
  usernameText: {
    color: Color.white,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 42,
  },
  settingContainer: {
    marginLeft: "auto",
    position: "relative",
  },
  settingsIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
});

export default Headerr;
