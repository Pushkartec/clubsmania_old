import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Card from "./Card";
import Header from "./Header";

export default function Home({navigation}) {
  return (
    <View style={{ backgroundColor: "#101010" }} >
      
      <Card 
      navigation = {navigation} />
    </View>
  );
}
