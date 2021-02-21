import React, { useRef, useState } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

const AnimationScreen = () => {
  const animation = useRef(new Animated.ValueXY(0)).current;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [click, setClick] = useState(0);

  animation.addListener((value) => {
    setX(value.x);
    setY(value.y);
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animation.setOffset({ x: animation.x_value, y: animation.y._value });
        animation.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: animation.x, dy: animation.y }],
        { useNativeDriver: true }
      ),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  const animatedStyle = {
    transform: animation.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.content, animatedStyle]}
        {...panResponder.panHandlers}
      />
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
  content: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
  },
});
