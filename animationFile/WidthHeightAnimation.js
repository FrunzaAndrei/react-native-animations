import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

const Animation = () => {
  const animation = useRef(new Animated.Value(150)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
      // useNativeDriver: false,
    }).start();
  };
  const animatedStyles = {
    width: animation,
    // height: animation,
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Child Text</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Animation;

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
