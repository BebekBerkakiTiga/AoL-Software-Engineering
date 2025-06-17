import * as React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Color from "../../config/color";

const iconMap = {
  Home: require("../../Assets//NavBar/Home.png"),
  Progress: require("../../Assets/NavBar/Progress.png"),
  Courses: require("../../Assets/NavBar/Courses.png"),
  Profile: require("../../Assets/NavBar/Profile.png"),
};

interface NavbarItemProps {
  icon: keyof typeof iconMap;
  label: string;
  isActive?: boolean;
  targetScreen: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  icon,
  label,
  isActive = false,
  targetScreen,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate(targetScreen);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image
        source={iconMap[icon]}
        style={[styles.icon, isActive && styles.activeIcon]}
      />
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const BottomNavbar: React.FC = () => {
  const route = useRoute();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.navbarContainer,
        { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 },
      ]}
    >
      <View style={styles.navbar}>
        <NavbarItem
          icon="Home"
          label="Home"
          targetScreen="Home"
          isActive={route.name === "Home"}
        />
        <NavbarItem
          icon="Progress"
          label="Progress"
          targetScreen="Progress"
          isActive={route.name === "Progress"}
        />
        <NavbarItem
          icon="Courses"
          label="Courses"
          targetScreen="Courses"
          isActive={route.name === "Courses"}
        />
        <NavbarItem
          icon="Profile"
          label="Profile"
          targetScreen="Profile"
          isActive={route.name === "Profile"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: Color.darkBlue,
    borderRadius: 30,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    borderBottomWidth: 0,
    borderWidth: 2,
    borderColor: Color.lightBlue,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: Color.subText,
  },
  activeIcon: {
    tintColor: Color.white,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: "600",
    color: Color.subText,
    textAlign: "center",
  },
  activeLabel: {
    color: Color.white,
  },
});

export default BottomNavbar
