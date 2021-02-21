import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(3),
      // easing: Easing.bezier(0.06, 1, 0.86, 0.23),
    }).start(() =>
      Animated.timing(animation, {
        toValue: -300,
        duration: 1000,
        // easing: Easing.back(5),
        // easing: Easing.bounce,
        // easing: Easing.elastic(3),
        // easing: Easing.bezier(0.06, 1, 0.86, 0.23),
      }).start()
    );
  };

  const animatedStyle = {
    transform: [{ translateY: animation }],
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
