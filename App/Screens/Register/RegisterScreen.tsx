import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useUserContext } from "../../data/UserContext";
import Color from "../../config/color"

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const RegisterScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { users, addUser } = useUserContext();

  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword || !country) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    const isTaken = users.some((u) => u.username === username);
    if (isTaken) {
      Alert.alert("Error", "Username is already taken.");
      return;
    }

    addUser({ username, email, password, country });

    Alert.alert("Success", "Account created successfully!", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientEnd]}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../Assets/Logo/LogoMathzizzMax.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Enter username"
        placeholderTextColor="#BBB"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#BBB"
        style={styles.input}
        value={email}
        onChangeText={setemail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#BBB"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#BBB"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="#BBB"
          secureTextEntry={!showConfirmPassword}
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Ionicons
            name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#BBB"
          />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Enter your country"
        placeholderTextColor="#BBB"
        style={styles.input}
        value={country}
        onChangeText={setCountry}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    marginBottom: 32,
  },
  logo: {
    width: 256,
    height: 256,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#4318D1",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#FFF",
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    borderColor: "#4318D1",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    color: "#FFF",
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#4318D1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RegisterScreen;
