import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./App/Screens/Home/HomeScreen";
import PlayQuiz from "./App/Screens/Play/Play";
import Thumbnail from "./App/Screens/Thumbnail/WelcomeScreen";
import QuizResult from "./App/Screens/Result/QuizResult";
import Courses from "./App/Screens/Courses/QuizSetupScreen";
import Progress from "./App/Screens/Progress/Progress";
import Profile from "./App/Screens/Profile/ProfileScreen";
import Register from "./App/Screens/Register/RegisterScreen";
import Login from "./App/Screens/Login/LoginScreen";
import { QuizProvider } from "./App/data/QuizContext";
import { SettingsProvider } from "./App/data/SettingsContext";
import { UserProvider } from "./App/data/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SettingsProvider>
      <QuizProvider>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Thumbnail"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Thumbnail" component={Thumbnail} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Progress" component={Progress} />
              <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
              <Stack.Screen name="QuizResult" component={QuizResult} />
              <Stack.Screen name="Courses" component={Courses} />
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </QuizProvider>
    </SettingsProvider>
  );
}
