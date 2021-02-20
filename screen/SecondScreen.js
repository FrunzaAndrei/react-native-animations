import React from "react";
import { Button, StyleSheet, ScrollView, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const SecondScreen = ({ navigation }) => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(
    {
      onScroll: ({ contentOffset: { y: value } }) => {
        y.value = value;
      },
    },
    180,
    300
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        style={styles.containerScrollView}
      ></Animated.ScrollView>
      <Button
        title="Go to second screen"
        onPress={() => navigation.navigate("Second")}
      />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSection: {
    width: "100%",
    height: 400,
  },
  containerScrollView: {
    flexGrow: 1,
  },
});
