import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Color from "../../config/color"

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Color.gradientStart, Color.gradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../Assets/Logo/LogoMathzizzMax.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Mathzizz</Text>
        <Text style={styles.description}>
          Fun, fast, and brain-boosting math quizzes for all levels. Start playing and master math today!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 67,
    paddingHorizontal: 10,
    flex: 1,
  },
  logoContainer: {
    position: "relative",
    width: 340,
    height: 302,
    marginBottom: 49,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 256,
    height: 256,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 25,
    paddingHorizontal: 18,
  },
  title: {
    color: Color.white,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 42,
    marginBottom: 26,
    textAlign: "center",
  },
  description: {
    color: Color.white,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 39,
    maxWidth: 380,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 16,
    width: "100%",
    maxWidth: 316,
  },
  button: {
    height: 42,
    borderRadius: 12,
    backgroundColor: Color.lightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default WelcomeScreen;
