import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SignupScreen = ({ navigation }) => (
  <View>
    <Text>SignupScreen</Text>
    <Button
      title="Go To Signin"
      onPress={() => navigation.navigate("Signin")}
    ></Button>
  </View>
);

export default SignupScreen;
