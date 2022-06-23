import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

export default function Slide() {
  return (
    <View>
      <View
        style={{
          height: 60,
          width: "100%",
          backgroundColor: "blue",
          marginTop: 80,
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        }}
      >
        <Ionicons name="location-sharp" size={30} color="grey" />
        <Text>Lokalizacja</Text>
        <Entypo name="circle-with-cross" size={25} color="grey" />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 10,
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        }}
      >
        <Ionicons name="location-sharp" size={30} color="grey" />
        <Text>Lokalizacja</Text>
        
        <Entypo name="circle-with-cross" size={25} color="grey" />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 10,
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        }}
      >
        <Ionicons name="location-sharp" size={30} color="grey" />
        <Text>Lokalizacja</Text>
        <Entypo name="circle-with-cross" size={25} color="grey" />
      </View>
    </View>
  );
}
