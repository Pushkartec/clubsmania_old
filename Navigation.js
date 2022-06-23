import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./Component/Detail";
import Home from "./Component/Home";
import Header from "./Component/Header";
import card from "./Component/Card";



const screenOptions = {
    headerShown:null,
  };

function RootNavigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Card" component={card} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Head" component={Header} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;