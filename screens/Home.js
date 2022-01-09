import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTab from '../components/home/BottomTab'
import Categories from '../components/home/Categories'
import  HeaderTabs  from  '../components/home/HeaderTabs'
import ResturantItem, { localResturants } from '../components/home/ResturantItem'
import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "Espr2RkiHyBX1SBZZvLdczpACp2A7eQYO0YWiK0-aHufMzwIkWCQV2bUb8-Wqgd-K-cvvXNMB_dEvU6EofxZFjoH5erFlyyFLaGRXsGyrpwZ9GDXqLguY6ixe2qbYXYx"
export default function Home({navigation}) {
    const [resturantData, setResturantData] = useState(localResturants)
    const [city, setCity] = useState("San Diego")
    const [activeTab, setActiveTab] = useState("Delivery")
    const getRestaurants =  () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        const apiOptions = {
            method: "GET",
            headers:{
                Authorization: `Bearer ${YELP_API_KEY}`,
              }
        }
        return fetch(yelpUrl, apiOptions)
        .then(res=> res.json())
        .then((json) => 
             setResturantData(json.businesses)
              
        )
         
        
    };
        

    useEffect(()=>{
        getRestaurants()
    },[city]);
    return (
        <SafeAreaView style = {{paddingVertical:30, backgroundColor:'#eee', flex:1}}>
            <View style = {{ backgroundColor: 'white', paddingVertical: 15}}>
                <HeaderTabs
                activeTab = {activeTab}
                 setActiveTab = {setActiveTab}
                />
                <SearchBar
                city = {city}
                setCity = {setCity}
                />
             </View>
             <ScrollView showsHorizontalScrollIndicator={false}>
             <Categories />
             <ResturantItem 
             resturantData= {resturantData} 
             navigation = {navigation}
             />
             </ScrollView>
                <Divider width={1}/>
                <BottomTab />
        </SafeAreaView>
    )
}
