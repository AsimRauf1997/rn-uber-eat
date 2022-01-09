import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/resturantDetail/About'
import MenuItems from '../components/resturantDetail/MenuItems'
import ViewCart from '../components/resturantDetail/ViewCart'

export default function ResturantDetails({navigation,route}) {
    return (
        <View>
            <About route = {route}/>
            <Divider width={1} style={{marginVertical:5}}/>
            <MenuItems restaurantName = {route.params.name} />
            <ViewCart navigation={navigation}  restaurantName = {route.params.name}/>
        </View>
    )
}
