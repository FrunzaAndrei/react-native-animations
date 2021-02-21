import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    animation.addListener(({ value }) => console.log("value :", value));
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 300,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
      }).start();
    });
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});
