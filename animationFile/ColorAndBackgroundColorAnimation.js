import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  //generally, interpolate only works with rgb, rgba colors
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });
  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"],
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const colorAnimatedStyle = {
    color: colorInterpolation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={colorAnimatedStyle}>Child Text</Animated.Text>
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
