import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Color from "../../config/color"

interface QuizResultItemProps {
  question: string;
  answer: string;
  isCorrect: boolean;
  imageUrl: any;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
};

const QuizResultItem: React.FC<QuizResultItemProps> = ({
  question,
  answer,
  isCorrect,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{truncateText(question, 50)}</Text>
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>{truncateText(answer, 20)}</Text>
        <Image source={imageUrl} style={styles.statusIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C1A78",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    flex: 1,
    fontSize: 12,
    color: Color.white,
    fontWeight: "400",
    marginRight: 10,
  },
  answerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  answerText: {
    fontSize: 12,
    color: Color.white,
    fontWeight: "700",
    marginRight: 8,
  },
  statusIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

export default QuizResultItem;
