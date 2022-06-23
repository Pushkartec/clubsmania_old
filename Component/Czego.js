import React from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";

export default function Czego() {
  return (
    <View
      style={{ height: "100%", paddingTop: 20, backgroundColor: "#101010" }}
    >
      <TouchableOpacity
        style={{
          height: "15%",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "grey", fontSize: 20, textAlign: "center", fontWeight:"bold" }}>
          Bar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: "15%",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "black",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "grey", fontSize: 20, textAlign: "center", fontWeight:"bold" }}>
          Clubs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: "15%",
          width: "100%",
          justifyContent: "center",
          backgroundColor: "black",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "grey", fontSize: 20, textAlign: "center", fontWeight:"bold" }}>
         Klub '0' Kawiarnia
        </Text>
      </TouchableOpacity>
    </View>
  );
}
