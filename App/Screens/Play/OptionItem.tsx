import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Color from "../../config/color"

interface OptionItemProps {
  letter: string;
  content: string;
  isSelected: boolean;
  onPress: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({
  letter,
  content,
  isSelected,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, isSelected && styles.selected]}>
        <Text style={styles.letterText}>{letter}.</Text>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.lightBlue,
    backgroundColor: Color.darkBlue,
  },
  selected: {
    backgroundColor: Color.lightBlue,
    borderColor: Color.white,
  },
  letterText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "700",
    marginRight: 8,
  },
  contentText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OptionItem;
