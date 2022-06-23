import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

export default function OtherItem() {
    return (
  <ScrollView style={{height:"100%", backgroundColor:"#101010"}}>
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
          Ogródek
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
          Palarnia
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
          Tarace
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
          Passport covidowy
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
          Dresscode
        </Text>
      </TouchableOpacity>
  </ScrollView>
    )
}
