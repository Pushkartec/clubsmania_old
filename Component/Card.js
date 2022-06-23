import React from "react";
import { View, Text, Image, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImgData } from "../data/CardData";
import Header from "./Header";

export default function card(props, {navigation}) {

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Header />
      <FlatList
        numColumns={2}
        data={ImgData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                props.navigation.navigate("Detail", {
                  dataName: item.name,
                  dataImage: item.image,
                  dataLogo: item.logo,
                  dataRating: item.rating,
                  dataDash: item.dash,
                  dataView: item.views,
                  dataNumber: item.tel,
                  dataEmail: item.email,
                  dataPrice: item.price,
                  dataPaid: item.paid,
                  dataSelection: item.selection,
                });
              }}
            >
              <View
                style={{
                  height: 230,
                  width: 160,
                  margin: 5,
                  backgroundColor: "black",
                  borderRadius: 8,
                }}
              >
                <Image
                  source={item.image}
                  style={{ height: 160, width: 160, borderRadius: 8 }}
                />
                <View style={{ marginTop: 8 }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <Image
                      source={item.logo}
                      style={{
                        height: 20,
                        width: 20,
                        marginLeft: 10,
                      }}
                    />
                    <Text
                      style={{ color: "white", paddingLeft: 8, fontSize: 16 }}
                    >
                      {item.rating}
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 20,
                        paddingLeft: 8,
                        marginTop: -5,
                      }}
                    >
                      {item.dash}
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 10,
                        paddingTop: 7,
                        paddingLeft: 5,
                      }}
                    >
                      {item.views}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
