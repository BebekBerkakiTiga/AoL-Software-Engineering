import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileSection, InputField } from "./UIComponents";
import Color from "../../config/color"

const InputCard = () => (
  <View style={styles.container}>
    <View style={styles.card}>
      <ProfileSection
        avatarUrl={require("../../Assets/Icon/profile.png")}
        username="Alex"
        role="Expert Math"
      />
      <View style={styles.separator} />
      <InputField value="Doni Albert Einstein" />
      <InputField
        value="****************"
        isPassword
        showIcon
        iconUrl={require("../../Assets/Icon/hide.png")}
      />
      <InputField label="Country:" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { maxWidth: 363 },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.lightBlue,
    backgroundColor: Color.darkBlue,
    padding: 17,
  },
  separator: {
    height: 34,
  },
});

export default InputCard;
