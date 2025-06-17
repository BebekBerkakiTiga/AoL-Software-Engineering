import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import CircleLetter from "./CircleLetter";
import ProgressBar from "./ProgressBar";
import Color from "../../config/color"

interface SubTopic {
  name: string;
  progress: number;
}

interface CourseCardProps {
  letter: string;
  title: string;
  subTopics: SubTopic[];
  expanded: boolean;
  onToggle: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  letter,
  title,
  subTopics,
  expanded,
  onToggle,
}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onToggle}
      android_ripple={{ color: "transparent" }}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CircleLetter letter={letter} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      {expanded && (
        <View style={styles.subTopicList}>
          {subTopics.map((sub, idx) => (
            <View key={idx} style={styles.subTopicItem}>
              <View style={styles.subTopicHeader}>
                <Text style={styles.subTopicText}>
                  {idx + 1}. {sub.name}
                </Text>
                <Text style={styles.progressText}>{sub.progress}%</Text>
              </View>
              <ProgressBar progress={sub.progress} width={300} />
            </View>
          ))}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderColor: Color.lightBlue,
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  arrow: {
    width: 12,
    height: 6,
    resizeMode: "contain",
  },
  subTopicList: {
    marginTop: 16,
    paddingLeft: 10,
  },
  subTopicItem: {
    marginBottom: 14,
  },
  subTopicHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 6,
    marginBottom: 4,
  },
  subTopicText: {
    color: "#B4A4CF",
    fontSize: 15,
  },
  progressText: {
    color: "#B4A4CF",
    fontSize: 14,
  },
});

export default CourseCard;
