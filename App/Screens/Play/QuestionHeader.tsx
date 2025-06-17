import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../config/color"

interface QuestionHeaderProps {
  questionNumber: string;
  timeRemaining: string;
  progress: string;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  questionNumber,
  timeRemaining,
  progress,
}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.timerContainer}>
        <Text style={styles.headerText}>Time: {timeRemaining}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.headerText}>{progress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  questionNumberContainer: {},
  timerContainer: {},
  progressContainer: {},
  headerText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: "700",
  },
});

export default QuestionHeader;
