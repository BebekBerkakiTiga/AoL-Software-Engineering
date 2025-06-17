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

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const LoginScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { users, loginUser } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      loginUser(foundUser);
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Failed", "Username or password is incorrect.");
    }
  };

  return (
    <LinearGradient
      colors={["#1C0436", "#510C9C"]}
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

      <Text style={styles.loginTitle}>Login</Text>

      <TextInput
        placeholder="Enter your username"
        placeholderTextColor="#BBB"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#BBB"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons
            name={secureText ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#BBB"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
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
  loginTitle: {
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
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    color: "#FFF",
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#4318D1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
