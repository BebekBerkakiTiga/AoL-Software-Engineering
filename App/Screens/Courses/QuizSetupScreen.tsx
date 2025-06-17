// QuizSetupScreen.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import DropdownSelector from "./DropdownSelector";
import ActionButton from "./ActionButton";
import BottomNavbar from "../HeaderFooter/BottomNavbar";
import Header from "../HeaderFooter/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import Color from "../../config/color";

type RootStackParamList = {
  QuizSetup: { preselectedTopic?: string };
  PlayQuiz: {
    topic: string;
    subject: string;
  };
};

const QuizSetupScreen: React.FC = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { preselectedTopic } = (route.params || {}) as { preselectedTopic?: string };

  const topicSubjectsMap: { [key: string]: string[] } = {
    Algebra: ["Linear Equations", "Quadratic Equations", "Polynomials"],
    Geometry: ["Triangles", "Perimeter & Area", "Surface Area & Volume"],
    Calculus: ["Derivatives", "Power Rule", "Integrals"],
    Statistics: ["Basic Functions", "Probability", "Linear Regression"],
    Trigonometry: ["Pythagorean Theorem", "Primary Trigonometric Function"],
  };

  useEffect(() => {
    if (preselectedTopic) {
      setSelectedTopic(preselectedTopic);
      setSelectedSubject("");
    }
  }, [preselectedTopic]);

  const handleStartPress = () => {
    if (!selectedTopic || !selectedSubject) {
      Alert.alert("Warning", "Please select both a topic and a subject.");
      return;
    }

    navigation.navigate("PlayQuiz", {
      topic: selectedTopic,
      subject: selectedSubject,
    });
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedSubject("");
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[Color.gradientStart, Color.gradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Ready to Test Your Knowledge?</Text>
          <Text style={styles.subtitle}>
            Embark on an exciting journey through challenging questions and
            prove your expertise across various topics!
          </Text>

          <DropdownSelector
            placeholder="Select Topic"
            selectedValue={selectedTopic}
            onValueChange={handleTopicChange}
            options={Object.keys(topicSubjectsMap)}
          />

          <DropdownSelector
            placeholder="Select Subject"
            selectedValue={selectedSubject}
            onValueChange={setSelectedSubject}
            options={
              selectedTopic ? topicSubjectsMap[selectedTopic] || [] : []
            }
          />

          <View style={styles.buttonContainer}>
            <ActionButton label="Start!" onPress={handleStartPress} />
          </View>
        </View>
      </ScrollView>

      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    paddingTop: 80,
    paddingBottom: 100,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: Color.darkBlue,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderColor: Color.lightBlue,
    borderWidth: 2,
  },
  title: {
    color: Color.white,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 8,
  },
  subtitle: {
    color: Color.subText,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: "center",
    width: "100%",
  },
});

export default QuizSetupScreen;
