import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const ScaleAnimation = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      // toValue: 2,
      toValue: -2,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    transform: [
      {
        scale: animation,
        // scaleX: animation,
        // scaleY: animation,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Here is my text</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScaleAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "red",
  },
});
