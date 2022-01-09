import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function SearchBar(props) {
    const [city, setCity] = useState("Searc City Here")
    return (
        <View style = {{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete 
            query = {{key:"AIzaSyA86Ztzw4bOB5xdqy1wXm-nAok8B6MownM"}}
            onPress = {(data, details = null)=>{
                console.log(data.description)
                const city = data.description.split(',')[0]
                console.log(city)
                props.setCity(city)
            }}
            placeholder = "Search Here"
            styles = {{
                textInput:{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: '700',
                    marginTop: 7
                },
                textInputContainer:{
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems:'center',
                    marginRight: 10
                }
            }}
            renderLeftButton = {() => (
                <View style = {{marginLeft: 10}}>
                    <Ionicons name = {'location-sharp'} size ={24}/>
                </View>
            )}
            renderRightButton = {() => (
                <View style = {{
                    flexDirection:'row',
                    marginRight: 8,
                    backgroundColor: 'white',
                    padding: 9,
                    borderRadius: 30,
                    alignItems:'center'

            }}>
                     <AntDesign name = {'clockcircle'} size ={11}
                     style = {{

                        marginRight: 6
                     }}
                     />
                    <Text> {props.city} </Text>
                   
                </View>
            )}

            />
        </View>
    )
}
