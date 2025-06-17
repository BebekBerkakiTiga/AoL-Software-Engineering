import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../config/color";

export interface ActionButtonProps {
  title: string;
  onPress?: () => void;
  fullWidth?: boolean;
  style?: any;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  onPress,
  fullWidth = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        fullWidth ? styles.fullWidth : styles.compact,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export interface Course {
  id: string;
  title: string;
  icon: string;
}

export interface CourseItemProps {
  course: Course;
  onStartPress: (courseId: string) => void;
}

export const CourseItem: React.FC<CourseItemProps> = ({ course, onStartPress }) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.courseInfo}>
        <Text style={styles.courseIcon}>{course.icon}</Text>
        <Text style={styles.courseTitle}>{course.title}</Text>
      </View>
      <ActionButton
        title="Start"
        onPress={() => onStartPress(course.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.lightBlue,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
    maxWidth: 316,
    height: 42,
    borderRadius: 12,
  },
  compact: {
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: Color.white,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  courseContainer: {
    width: "100%",
    height: 69,
    backgroundColor: Color.darkBlue,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    justifyContent: "space-between",
    borderWidth: 2,
        borderColor: Color.lightBlue,
  },
  courseInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  courseIcon: {
    color: Color.white,
    fontSize: 20,
  },
  courseTitle: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
