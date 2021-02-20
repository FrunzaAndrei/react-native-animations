import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const DisplayItemFirstScreen = ({ y, index, title, image }) => {
  const containerAnimated = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      [(index - 1) * 128, index * 128],
      [128, 300],
      Extrapolate.CLAMP
    ),
  }));
  return (
    <Animated.View style={[styles.containerSection, containerAnimated]}>
      <ImageBackground style={styles.images} source={image}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </Animated.View>
  );
};

export default DisplayItemFirstScreen;

const styles = StyleSheet.create({
  images: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
