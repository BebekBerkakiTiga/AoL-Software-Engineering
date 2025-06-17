import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import Color from "../../config/color";

interface DropdownSelectorProps {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  options: string[];
  placeholder?: string;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  selectedValue,
  onValueChange,
  options,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={selectedValue ? styles.selectedText : styles.placeholderText}>
          {selectedValue || placeholder || "Select..."}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  dropdown: {
    backgroundColor: Color.gradientStart,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Color.lightBlue,
    paddingHorizontal: 10,
    height: 48,
    justifyContent: "center",
  },
  placeholderText: {
    color: Color.subText,
    fontSize: 14,
  },
  selectedText: {
    color: Color.white,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  modalContent: {
    backgroundColor: Color.gradientStart,
    borderRadius: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: Color.lightBlue,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  optionText: {
    color: Color.white,
    fontSize: 14,
  },
});

export default DropdownSelector;
