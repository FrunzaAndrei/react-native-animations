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
      toValue: 1,
      duration: 1500,
    }).start(() =>
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start()
    );
  };

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["20%", "80%"],
  });
  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["10%", "40%"],
  });

  const animatedStyle = {
    width: widthInterpolate,
    height: heightInterpolate,
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
    // width: "20%",
    // height: "20%",
    backgroundColor: "red",
  },
});
