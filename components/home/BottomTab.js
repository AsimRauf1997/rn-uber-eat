import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function BottomTab() {
    return (
        <View style = {{
            flexDirection:'row',
            justifyContent:'space-between',
            margin: 10,
            marginHorizontal: 30,
        }}>
            <Icon name = "home" text = "Home" />
            <Icon name = "search" text = "Browse" />
            <Icon name = "shopping-bag" text = "Grocery" />
            <Icon name = "receipt" text = "Orders" />
            <Icon name = "user" text = "Account" />
            
        </View>
    )
}
const Icon = (props)=>(
    <View>
        <TouchableOpacity>
        <FontAwesome5 
            name = {props.name}
            size = {25}
            style = {{
                marginBottom: 3,
                alignSelf: 'center'
            }}
        />
        <Text> {props.text} </Text>
        </TouchableOpacity>
        
    </View>
)