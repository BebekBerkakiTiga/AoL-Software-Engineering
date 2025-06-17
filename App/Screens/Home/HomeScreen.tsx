import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActionButton, CourseItem, Course } from "./Components";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavbar from "../HeaderFooter/BottomNavbar";
import Head from "../HeaderFooter/Header";
import Color from "../../config/color";
import { useUserContext } from "../../data/UserContext";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { currentUser } = useUserContext();

  const userName = currentUser?.username ?? "Guest";

  const courses: Course[] = [
    { id: "algebra", title: "Algebra", icon: "∑" },
    { id: "geometry", title: "Geometry", icon: "△" },
    { id: "calculus", title: "Calculus", icon: "∫" },
    { id: "statistics", title: "Statistics", icon: "σ" },
    { id: "trigonometry", title: "Trigonometry", icon: "θ" },
  ];

  const handleStartCourse = (topic: string) => {
    navigation.navigate("Courses", { preselectedTopic: topic });
  };

  const handleStartNewCourse = () => {
    navigation.navigate("Courses");
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={[Color.gradientStart, Color.gradientEnd]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Head />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.container}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
            <Text style={styles.subtitleText}>Ready to master math?</Text>
          </View>

          <View style={styles.newCourseButtonContainer}>
            <ActionButton
              title="Start New Course"
              onPress={handleStartNewCourse}
              fullWidth
            />
          </View>

          <View style={styles.courseListContainer}>
            <Text style={styles.courseListTitle}>Your Courses</Text>
            {courses.map((course) => (
              <View key={course.id} style={styles.courseItemWrapper}>
                <CourseItem
                  course={course}
                  onStartPress={() => handleStartCourse(course.title)}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.gradientStart,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {},
  container: {
    flexDirection: "column",
    width: "100%",
    padding: 24,
    marginTop: 30,
  },
  welcomeSection: {
    marginTop: 120,
    marginBottom: 32,
  },
  welcomeText: {
    color: Color.white,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 42,
    marginBottom: 8,
  },
  subtitleText: {
    color: Color.subText,
    fontSize: 16,
    lineHeight: 24,
  },
  newCourseButtonContainer: {
    justifyContent: "center",
    marginBottom: 40,
  },
  courseListContainer: {
    marginTop: 20,
  },
  courseListTitle: {
    color: Color.white,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 20,
  },
  courseItemWrapper: {
    marginBottom: 13,
  },
});

export default HomeScreen;
