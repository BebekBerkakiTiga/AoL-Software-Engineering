import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import { UserProvider } from "../../data/UserContext";
import Color from "../../config/color"

const MathzizzApp: React.FC = () => {
  return (
    <UserProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.container}>
          <WelcomeScreen />
        </View>
      </SafeAreaView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default MathzizzApp;
