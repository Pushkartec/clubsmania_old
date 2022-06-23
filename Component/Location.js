import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import{GooglePlacesAutocomplete, GooglePlacesAutoComplete} from 'react-native-google-places-autocomplete';



export default function Location() {
    return (
        <View style={{height:"100%", backgroundColor:"black",}}>
            <GooglePlacesAutocomplete
            query={{key:'AIzaSyDmWn9FzGe_igFTVHH6gzvZWUoz5gt67Ds'}}
            onPress={(data, details= null)=> {  
              console.log(data.description)
            }}

            placeholder="Lokalizacja"
            styles={{
                textInput:{
                  backgroundColor:"#ffff",
                  borderRadius:20,
                  fontWeight:"bold",
                  textAlign:"justify",
                  marginTop:25,
                  paddingLeft:25
                  
                }
              
            }}
            renderRightButton={()=>(
                <View style={{position:"absolute", right:20, top:33}}>
                  <FontAwesome5 name="search"  size={24}  color="grey" style={{fontWeight:"bold"}} />
                </View>
              )}             
             />
             
        </View>
    )
}
