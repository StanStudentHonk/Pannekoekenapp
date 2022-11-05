import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {UserForm} from "../user/user-form";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./mainNavigationBar";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="Login" component={UserForm} />
        <Stack.Screen name="Home" component={MainContainer} />
      </Stack.Navigator>
  );
};

export default AuthStack;
