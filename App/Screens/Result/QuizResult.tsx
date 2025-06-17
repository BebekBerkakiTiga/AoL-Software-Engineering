import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import QuizResultItem from "./QuizResultItem";
import ActionButton from "./ActionButton";
import Header from "../HeaderFooter/Header";
import BottomNavbar from "../HeaderFooter/BottomNavbar";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../data/QuizContext";
import Color from "../../config/color";

function QuizResult() {
  const route = useRoute();
  const navigation = useNavigation();
  const { saveResult } = useContext(QuizContext);

  const { results, topic, subject } = route.params as {
    results: { question: string; answer: string; isCorrect: boolean }[];
    topic: string;
    subject: string;
  };

  const correctCount = results.filter((r) => r.isCorrect).length;
  const incorrectCount = results.length - correctCount;
  const scorePercent = Math.round((correctCount / results.length) * 100);

  useEffect(() => {
    saveResult({ topic, subject, score: scorePercent });
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Color.gradientStart, Color.gradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Header />
      <View style={styles.rectangle}>
        <Text style={styles.title}>Quiz Results</Text>
        <Text style={styles.scoreLabel}>Your Score</Text>
        <Text style={styles.score}>{scorePercent}%</Text>

        <View style={styles.scoreSummary}>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreBoxNumber}>{correctCount}</Text>
            <Text style={styles.scoreBoxLabel}>Correct</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreBoxNumber}>{incorrectCount}</Text>
            <Text style={styles.scoreBoxLabel}>Incorrect</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.scoreBoxNumber}>{results.length}</Text>
            <Text style={styles.scoreBoxLabel}>Total</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {results.map((item, index) => (
            <QuizResultItem
              key={index}
              question={item.question}
              answer={item.answer}
              isCorrect={item.isCorrect}
              imageUrl={
                item.isCorrect
                  ? require("../../Assets/Icon/check.png")
                  : require("../../Assets/Icon/incorrect.png")
              }
            />
          ))}
        </ScrollView>

        <View style={styles.actionButtonsContainer}>
          <ActionButton
            label="Back to Course"
            onPress={() => navigation.navigate("Courses")}
          />
          <ActionButton
            label="Play Again?"
            onPress={() => navigation.replace("PlayQuiz", { topic, subject })}
          />
        </View>
      </View>
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle: {
    flex: 1,
    marginTop: 120,
    marginHorizontal: 20,
    marginBottom: 80,
    borderRadius: 20,
    backgroundColor: Color.darkBlue,
    padding: 24,
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: Color.lightBlue,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.white,
    textAlign: "center",
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 14,
    color: "#B8A1FF",
    textAlign: "center",
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
    color: Color.white,
    textAlign: "center",
    marginBottom: 16,
  },
  scoreSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  scoreBox: {
    alignItems: "center",
  },
  scoreBoxNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.white,
  },
  scoreBoxLabel: {
    fontSize: 12,
    color: "#B8A1FF",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 16,
    paddingBottom: 12,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
});

export default QuizResult;
