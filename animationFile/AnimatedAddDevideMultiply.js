import React, { useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 30,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
      }).start();
    });
  };

  const randomValue = 6;
  // const randomValue = useRef(new Animated.Value(2)).current;

  // const newAnimation = Animated.add(animation, randomValue);
  // const newAnimation = Animated.divide(animation, randomValue);
  const newAnimation = Animated.multiply(animation, randomValue);

  const animatedStyle = {
    transform: [{ translateY: newAnimation }],
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
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});
