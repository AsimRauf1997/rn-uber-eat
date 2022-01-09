import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
    {
        id: 1,
        image: require("../../assets/images/shopping-bag.png"),
        text : 'Pick-Up' 
    },
    {
        id: 2,
        image:  require("../../assets/images/bread.png"),
        text: 'Bakery Items' 
    },
    {
        id: 3,
        image: require("../../assets/images/fast-food.png"),
        text: 'Fast Foods' 
    },
    {
        id: 4,
        image: require("../../assets/images/deals.png"),
        text: 'Deals'
    },
    
    {
        id: 5,
        image: require("../../assets/images/coffee.png"),
        text: 'Coffee & Tea'
    },
    

]
export default function Categories() {
    return (
        <View
            style = {{marginTop: 5, backgroundColor: 'white', paddingLeft: 20, paddingVertical:10}} >
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                {items.map((item, index)=>
           <View key ={index}
           style = {{ 
            alignItems:'center',
            marginRight: 30,
            backgroundColor:'#DCDCDC',
            justifyContent:'center',
            borderRadius:10,
            height: 80,
            width:80,
           }}
           
           >
               <View>

               </View>
                <Image 
               source = {item.image}
               style = {{
                   width:69,
                   height:40,
                   resizeMode: 'contain',
                   //marginTop:3
                  
                   
               }}
               />
               <Text
               style = {{fontWeight:'700', fontSize: 13}}
               > {item.text}</Text>

           </View>
              


           )}



              
           
        </ScrollView>
        </View>
        
    )
}
