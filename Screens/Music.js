import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Music() {
  
  return (
    <ScrollView style={{ backgroundColor: "#101010", height: "100%" }}>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
       
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
          
        >
          Pop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
       
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Hip Hop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
       
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Electronic
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Latino
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Jazz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Rock
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Techno
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          House
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Deep House
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Disco
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Disco Polo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: "black",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Na Zywo
        </Text>
      </TouchableOpacity>

      <StatusBar />
    </ScrollView>
  );
}
