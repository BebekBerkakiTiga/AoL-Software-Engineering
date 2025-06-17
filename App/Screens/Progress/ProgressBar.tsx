import * as React from "react";
import { View, StyleSheet } from "react-native";
import Color from "../../config/color"

interface ProgressBarProps {
  progress: number;
  width?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, width = 330 }) => {
  const progressWidth = (progress / 100) * width;

  return (
    <View style={[styles.container, { width }]}>
      <View style={[styles.progress, { width: progressWidth }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 99999,
    height: 4,
    backgroundColor: "#3D2483",
    overflow: "hidden",
    maxWidth: "100%",
  },
  progress: {
    borderRadius: 99999,
    height: 4,
    backgroundColor: Color.lightBlue,
    flexShrink: 0,
  },
});

export default ProgressBar;
