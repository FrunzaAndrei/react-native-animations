import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Animated } from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
  });

  const animatedStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        // onScroll={(e) => {
        //   animation.setValue(e.nativeEvent.contentOffset.y);
        // }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animation,
              },
            },
          },
        ])}
      >
        <Animated.View style={[styles.content, animatedStyle]} />
      </ScrollView>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});
