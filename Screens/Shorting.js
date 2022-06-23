import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Shorting() {
    return (
<View style={{height:"100%", backgroundColor:"#101010"}}>
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
          odległość
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
          Popularny
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
          Alphabet
        </Text>
      </TouchableOpacity>
</View>
    )
}
