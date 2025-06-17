import React, { useState, useContext } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CourseCard from "./CourseCard";
import Headerr from "../HeaderFooter/Header";
import BottomNavbar from "../HeaderFooter/BottomNavbar";
import { QuizContext } from "../../data/QuizContext";

const baseCourses = [
  {
    letter: "A",
    title: "Algebra",
    subTopics: ["Linear Equations", "Quadratic Equations", "Polynomials"],
  },
  {
    letter: "G",
    title: "Geometry",
    subTopics: ["Triangles", "Perimeter & Area", "Surface Area & Volume"],
  },
  {
    letter: "C",
    title: "Calculus",
    subTopics: ["Derivatives", "Power Rule", "Integrals"],
  },
  {
    letter: "S",
    title: "Statistics",
    subTopics: ["Basic Functions", "Probability", "Linear Regression"],
  },
  {
    letter: "T",
    title: "Trigonometry",
    subTopics: ["Pythagorean Theorem", "Primary Trigonometric Function"],
  },
];

const Course: React.FC = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const { results } = useContext(QuizContext);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const coursesWithProgress = baseCourses.map((course) => {
    const subTopics = course.subTopics.map((sub) => {
      const result = results.find(
        (r) => r.topic === course.title && r.subject === sub
      );
      return {
        name: sub,
        progress: result ? result.score : 0,
      };
    });
    return {
      letter: course.letter,
      title: course.title,
      subTopics,
    };
  });

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["#1C0436", "#510C9C"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <Headerr />

      <ScrollView contentContainerStyle={styles.container}>
        {coursesWithProgress.map((course, index) => (
          <CourseCard
            key={index}
            letter={course.letter}
            title={course.title}
            subTopics={course.subTopics}
            expanded={expandedIndices.includes(index)}
            onToggle={() => toggleExpand(index)}
          />
        ))}
      </ScrollView>

      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    padding: 30,
    paddingBottom: 80,
    paddingTop: 120,
  },
});

export default Course;
