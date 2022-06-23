import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Slide from "./Slide";
import Location from "./Location";
import Czego from "./Czego";
import Parties from "../Screens/Parties";
import Music from "../Screens/Music";
import Price from "../Screens/Price";
import OtherItem from "../Screens/OtherItem";
import Shorting from "../Screens/Shorting";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutoComplete,
} from "react-native-google-places-autocomplete";

const items = [
  {
    image: require("../assets/logo/logo.png"),
  },
];

export default function Header() {
  const [newSlider, setNewSlider] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [newCzego, setNewCzego] = useState(false);
  const [newParty, setNewParty] = useState(false);
  const [newMusic, setNewMusic] = useState(false);
  const [newCena, setNewCena] = useState(false);
  const [newInne, setNewInne] = useState(false);
  const [newShort, setNewShort] = useState(false);
  const [myText, setMyText] = useState("Polska");
  const [myBar, setMyBar] = useState("Wybierz");
  const [myImpreza, setMyImpreza] = useState("Wybierz");
  const [myMusic, setMyMusic] = useState("Wybierz");
  const [myPrice, setMyPrice] = useState("Wybierz");
  const [myChoice, setMyChoice] = useState("Wybierz");
  const [myShort, setMyShort] = useState("Wybierz");

  var newData = "";
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#101010",
        height: 80,
        width: "100%",
        marginLeft: 15,
        paddingTop: 15,
      }}
    >
      <TouchableOpacity
        onPress={() => setNewSlider(true)}
        style={{ position: "absolute", right: 20, marginTop: 20 }}
      >
        <View style={{ width: 80, height: "130%", alignItems: "center" }}>
          <FontAwesome5 name="search" size={25} color="grey" />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={newSlider}
        onRequestClose={() => {
          setNewSlider(false);
        }}
      >
        <View style={{ height: "100%", backgroundColor: "black" }}>
          <View>
            <Modal
              animationType="slide"
              visible={newModal}
              onRequestClose={() => {
                setNewModal(false);
              }}
            >
              {/* location area starts here */}

              <View style={{ height: "100%", backgroundColor: "black" }}>
                <GooglePlacesAutocomplete
                  query={{ key: "AIzaSyDmWn9FzGe_igFTVHH6gzvZWUoz5gt67Ds" }}
                  onPress={(data, details = null) => {
                    newData = data.description;
                    setMyText(newData);
                    setNewModal(false);
                  }}
                  placeholder="Lokalizacja"
                  styles={{
                    textInput: {
                      backgroundColor: "#ffff",
                      borderRadius: 20,
                      fontWeight: "bold",
                      textAlign: "justify",
                      marginTop: 25,
                      paddingLeft: 25,
                    },
                  }}
                  renderRightButton={() => (
                    <View style={{ position: "absolute", right: 20, top: 33 }}>
                      <FontAwesome5
                        name="search"
                        size={24}
                        color="grey"
                        style={{ fontWeight: "bold" }}
                      />
                    </View>
                  )}
                />
              </View>

              {/* location area ends here */}
            </Modal>

            <Modal
              animationType="slide"
              visible={newCzego}
              onRequestClose={() => {
                setNewCzego(false);
              }}
            >
              {/* czego area starts here */}

              <View
                style={{
                  height: "100%",
                  paddingTop: 20,
                  backgroundColor: "#101010",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: "15%",
                    width: "100%",
                    justifyContent: "center",
                    backgroundColor: "black",
                  }}
                  onPress={() => {
                    setMyBar("Bar");
                    setNewCzego(false);
                  }}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
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
                  onPress={() => {
                    setMyBar("Clubs");
                    setNewCzego(false);
                  }}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
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
                  onPress={() => {
                    setMyBar("Klub '0' Kawiarnia");
                    setNewCzego(false);
                  }}
                >
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 20,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Klub '0' Kawiarnia
                  </Text>
                </TouchableOpacity>
              </View>

              {/* czego area ends here */}
            </Modal>
            <Modal
              animationType="slide"
              visible={newParty}
              onRequestClose={() => {
                setNewParty(false);
              }}
            >
              {/* party area starts here */}

              <ScrollView
                style={{ backgroundColor: "#101010", height: "100%" }}
              >
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Casual");
                    setNewParty(false);
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
                    casual
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Elegant");
                    setNewParty(false);
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
                    Elegant
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Dj Bar");
                    setNewParty(false);
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
                    Dj Bar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Alternativena");
                    setNewParty(false);
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
                    Alternativena
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza(" Gay/Lesbian");
                    setNewParty(false);
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
                    Gay/Lesbian
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Muzyka Na Zywo");
                    setNewParty(false);
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
                    Muzyka Na Zywo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Roof Top");
                    setNewParty(false);
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
                    Roof Top
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Lunch Bar");
                    setNewParty(false);
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
                    Lunch Bar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Taniec");
                    setNewParty(false);
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
                    Taniec
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("sheesha");
                    setNewParty(false);
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
                    sheesha
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyImpreza("Rozmowa i pieczy");
                    setNewParty(false);
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
                    Rozmowa i pieczy
                  </Text>
                </TouchableOpacity>
                <StatusBar />
              </ScrollView>

              {/* party area ends here */}
            </Modal>
            <Modal
              animationType="slide"
              visible={newMusic}
              onRequestClose={() => {
                setNewMusic(false);
              }}
            >
              {/* music area starts here */}

              <ScrollView
                style={{ backgroundColor: "#101010", height: "100%" }}
              >
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyMusic("Pop");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Hip Hop");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Electronic");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Latino");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Jazz");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Rock");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Techno");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("House");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Deep House");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Disco");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Disco Polo");
                    setNewMusic(false);
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
                  onPress={() => {
                    setMyMusic("Na Zywo");
                    setNewMusic(false);
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

              {/* music area ends here */}
            </Modal>
            <Modal
              animationType="slide"
              visible={newCena}
              onRequestClose={() => {
                setNewCena(false);
              }}
            >
              <ScrollView
                style={{ backgroundColor: "#101010", height: "100%" }}
              >
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyPrice("5$");
                    setNewCena(false);
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
                    5 $
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
                    onPress={() => {
                      setMyPrice("10$");
                      setNewCena(false);
                    }}
                  >
                    10 $
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyPrice("15$");
                    setNewCena(false);
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
                    15 $
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </Modal>
            <Modal
              animationType="slide"
              visible={newInne}
              onRequestClose={() => {
                setNewInne(false);
              }}
            >
              {/* inne starts here */}

              <ScrollView
                style={{ height: "100%", backgroundColor: "#101010" }}
              >
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyChoice("Ogródek");
                    setNewInne(false);
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
                  onPress={() => {
                    setMyChoice("Palarnia");
                    setNewInne(false);
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
                  onPress={() => {
                    setMyChoice("Tarace");
                    setNewInne(false);
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
                  onPress={() => {
                    setMyChoice("Passport covidowy");
                    setNewInne(false);
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
                  onPress={() => {
                    setMyChoice("Dresscode");
                    setNewInne(false);
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

              {/* inne starts here */}
            </Modal>
            <Modal
              animationType="slide"
              visible={newShort}
              onRequestClose={() => {
                setNewShort(false);
              }}
            >
              {/* shorting area starts here */}

              <View style={{ height: "100%", backgroundColor: "#101010" }}>
                <TouchableOpacity
                  style={{
                    height: 70,
                    backgroundColor: "black",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setMyShort("odległość");
                    setNewShort(false);
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
                  onPress={() => {
                    setMyShort("Popularny");
                    setNewShort(false);
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
                  onPress={() => {
                    setMyShort("Alphabet");
                    setNewShort(false);
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

              {/* shorting area ends here */}
            </Modal>
            {/* location are starts here */}

            <TouchableOpacity
              onPress={() => {
                setNewModal(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  flexDirection: "row",
                  paddingTop: 5,
                  marginTop: "20%",
                  backgroundColor: "#101010",
                }}
              >
                <Ionicons
                  name="location-sharp"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    height: "100%",
                    width: "85%",
                    color: "#ffff",
                    fontSize: 20,
                    paddingTop: 12,
                    paddingLeft: 10,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Lokalizacja
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    width: "30%",
                    height: 43,
                    color: "#ffff",
                    fontSize: 16,
                    position: "absolute",
                    right: 40,
                    top: 20,
                    color: "grey",
                  }}
                >
                  {myText}
                </Text>
                <Entypo
                  name="circle-with-cross"
                  size={30}
                  color="#ffff"
                  style={{
                    marginTop: 10,
                    position: "absolute",
                    right: 5,
                    top: 5,
                  }}
                />
              </View>
            </TouchableOpacity>

            {/* this is area of czego szukasz */}

            <TouchableOpacity
              onPress={() => {
                setNewCzego(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <Entypo
                  name="flashlight"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Czego Szukasz
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                >
                  {myBar}
                </Text>
              </View>
            </TouchableOpacity>

            {/* type area starts here */}
            <TouchableOpacity
              onPress={() => {
                setNewParty(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <Ionicons
                  name="md-grid"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Typy Impreza
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                >
                  {myImpreza}
                </Text>
              </View>
            </TouchableOpacity>

            {/* type area ends here  */}

            {/* music area starts here */}
            <TouchableOpacity
              onPress={() => {
                setNewMusic(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <FontAwesome5
                  name="music"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Muzyka
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                >
                  {myMusic}
                </Text>
              </View>
            </TouchableOpacity>

            {/* music area starts here  */}

            {/* cena area starts here */}

            <TouchableOpacity
              onPress={() => {
                setNewCena(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <FontAwesome5
                  name="dollar-sign"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 15, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Cena
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                  onPress={() => {
                    setNewCena(true);
                  }}
                >
                  {myPrice}
                </Text>
              </View>
            </TouchableOpacity>

            {/* cena area ends here */}

            {/* inne starts here */}

            <TouchableOpacity
              onPress={() => {
                setNewInne(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <Entypo
                  name="infinity"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Inne
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                >
                  {myChoice}
                </Text>
              </View>
            </TouchableOpacity>

            {/* inne ends here */}

            <TouchableOpacity
              onPress={() => {
                setNewShort(true);
              }}
            >
              <View
                style={{
                  height: 60,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#101010",
                  marginTop: 10,
                  paddingTop: 5,
                }}
              >
                <FontAwesome5
                  name="sort-amount-down"
                  size={30}
                  color="#ffff"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <Text
                  style={{
                    padding: 10,
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffff",
                  }}
                >
                  Sortuj wg
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    position: "absolute",
                    paddingTop: 15,
                    right: 20,
                    color: "grey",
                  }}
                >
                  {myShort}
                </Text>
              </View>
            </TouchableOpacity>

            {/* sort area ends here */}

            {/* button area starts here */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 50,
            }}
          >
            <View style={{ width: "40%", height: 100, height: 50 }}>
              <TouchableOpacity
                onPress={() => {
                  setMyText("polska");
                  setMyBar("Wybierz");
                  setMyImpreza("Wybierz");
                  setMyMusic("Wybierz");
                  setMyPrice("Wybierz");
                  setMyChoice("Wybierz");
                  setMyShort("Wybierz");
                }}
              >
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    borderRadius: 100,
                    textAlign: "center",
                    backgroundColor: "grey",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#ffff",
                      textAlign: "center",
                      paddingTop: 10,
                    }}
                  >
                    wyczyść
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: "40%", height: 100, height: 50 }}>
              <TouchableOpacity onPress={() => setNewSlider(false)}>
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    borderRadius: 100,
                    textAlign: "center",
                    backgroundColor: "#c711d8",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#ffff",
                      textAlign: "center",
                      paddingTop: 10,
                    }}
                  >
                    Zastosuj
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Image source={items[0].image} style={{ height: 40, width: 40 }} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
          paddingLeft: 10,
          paddingTop: 5,
        }}
      >
        ClubsMania
      </Text>

      <StatusBar style="auto" />

{/* here goes flat list */}






    </View>
  );
}
