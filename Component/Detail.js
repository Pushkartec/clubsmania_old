import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { ImgData } from "../data/CardData";
import OtherItem from "../Screens/OtherItem";

export default function Detail(props,{navigation}) {
  const {
    dataName,
    dataImage,
    dataLogo,
    dataRating,
    dataDash,
    dataView,
    dataNumber,
    dataEmail,
    dataPrice,
    dataPaid,
    dataSelection
  } = props.route.params;

  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: "#101010", flex: 1 }}>
      <View>
        <Image source={dataImage} style={{ height: "28%", width: "100%" }} />
        <Text
          style={{
            paddingLeft: 10,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            paddingTop: 15,
          }}
        >
          {dataName}
        </Text>
        <View style={{ paddingLeft: 10, paddingTop: 15, flexDirection: "row" }}>
          <Image source={dataLogo} style={{ height: 30, width: 30 }} />
          <Text
            style={{
              color: "white",
              paddingLeft: 10,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {dataRating}
          </Text>
          <Text
            style={{
              color: "white",
              paddingLeft: 10,
              fontSize: 35,
              marginTop: -9,
              color: "grey",
            }}
          >
            {dataDash}
          </Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}>
            {dataView}
          </Text>
        </View>
        {/* dummy code starts here */}
        <View
          style={{ paddingTop: 5, flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ flex: 1, height: 0.5, backgroundColor: "grey" }} />
        </View>
        {/* dummy code ends here */}

        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ color: "white" }}>Tel: {dataNumber}</Text>
          <Text style={{ color: "white", paddingTop: 5 }}>
            Web: {dataEmail}
          </Text>
        </View>
        <View
          style={{ height: "23%", marginTop: 20, backgroundColor: "black" }}
        >
          <Text style={{ color: "white", paddingLeft: 10, marginTop: 15 }}>
            przedział cenowy :  {dataPrice}
          </Text>
          <Text style={{ color: "white", paddingLeft: 10, marginTop: 15 }}>
            wejście Płatne :  {dataPaid}
          </Text>
          <Text style={{ color: "white", paddingLeft: 10, marginTop: 15 }}>
            selekcja :  {dataSelection}
          </Text>
        </View>
        {/* horizontal line starts here */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <View style={{ flex: 0.2, height: 1, backgroundColor: "grey" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "grey" }}>
              TYPY
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
        </View>
        {/* horizontal line ends here */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#333333",
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 50, color: "grey" }}>Casual</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#333333",
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 50, color: "grey" }}>Elegent</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: '#333333',
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 50, color: "grey" }}>Muzyka</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "#333333",
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 60, color: "grey" }}>Roof top</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#333333",
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 50, color: "grey" }}>Taniec</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#333333",
              borderRadius: 100,
            }}
          >
            <Text style={{ width: 60, color: "grey" }}>Sheesha</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
