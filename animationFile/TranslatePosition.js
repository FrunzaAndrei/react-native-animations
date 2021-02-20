import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const TranslatePosition = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      animation.setValue(0);
    });
  };
  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TranslatePosition;

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
