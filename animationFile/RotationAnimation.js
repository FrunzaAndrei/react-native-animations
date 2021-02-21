import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    // clock rotation
    outputRange: ["0deg", "360deg"],
    // counter clock
    // outputRange: ["0deg", "-360deg"],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: rotateInterpolate,
        // rotateX: rotateInterpolate,
        // rotateY: rotateInterpolate,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text>Child Text</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    backgroundColor: "red",
  },
});
