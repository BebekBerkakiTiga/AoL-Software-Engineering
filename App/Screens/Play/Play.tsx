import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { questions } from "../../data/questions";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import QuestionHeader from "./QuestionHeader";
import OptionItem from "./OptionItem";
import Color from "../../config/color";

type RootStackParamList = {
  PlayQuiz: {
    topic: string;
    subject: string;
  };
  QuizResult: {
    results: {
      question: string;
      answer: string;
      isCorrect: boolean;
    }[];
    topic: string;
    subject: string;
  };
};

const TIMER_DURATION = 30;

const PlayQuiz = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "PlayQuiz">>();
  const route = useRoute<RouteProp<RootStackParamList, "PlayQuiz">>();
  const { topic, subject } = route.params;

  const filteredQuestions = questions.filter(
    (q) => q.topic === topic && q.subject === subject
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [userAnswers, setUserAnswers] = useState<
    {
      question: string;
      answer: string;
      isCorrect: boolean;
    }[]
  >([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = filteredQuestions[currentQuestion];

  useEffect(() => {
    if (hasAnswered) return;

    if (timeLeft === 0) {
      recordAnswer(null);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasAnswered]);

  const recordAnswer = (selectedOption: string | null) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedAnswer(selectedOption);

    const isCorrect = selectedOption === question.correctAnswer;

    const updatedAnswers = [
      ...userAnswers,
      {
        question: question.question,
        answer: selectedOption ?? "Not Answered",
        isCorrect: selectedOption !== null ? isCorrect : false,
      },
    ];

    setUserAnswers(updatedAnswers);

    if (currentQuestion + 1 < filteredQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setTimeLeft(TIMER_DURATION);
        setSelectedAnswer(null);
        setHasAnswered(false);
      }, 800);
    } else {
      setTimeout(() => {
        navigation.navigate("QuizResult", {
          results: updatedAnswers,
          topic,
          subject,
        });
      }, 800);
    }
  };

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          No questions available for this topic and subject.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <LinearGradient
        colors={[Color.gradientStart, Color.gradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerBox}>
          <QuestionHeader
            questionNumber={`${currentQuestion + 1}`}
            timeRemaining={`00:${String(timeLeft).padStart(2, "0")}`}
            progress={`${currentQuestion + 1} of ${filteredQuestions.length}`}
          />
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>{question.question}</Text>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <OptionItem
              key={index}
              letter={String.fromCharCode(65 + index)}
              content={option}
              isSelected={selectedAnswer === option}
              onPress={() => recordAnswer(option)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    marginTop: 120,
    alignItems: "center",
  },
  headerBox: {
    width: "100%",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
        borderWidth: 2,
    borderColor: Color.gradientEnd,
  },
  questionBox: {
    marginTop: 12,
    backgroundColor: "#390f7d",
    borderRadius: 10,
    minHeight: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  questionText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
    gap: 12,
    marginTop: 12,
  },
});

export default PlayQuiz;
