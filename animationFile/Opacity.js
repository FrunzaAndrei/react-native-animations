import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

const Opacity = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };
  const animatedStyles = {
    opacity: animation,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Opacity;

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
