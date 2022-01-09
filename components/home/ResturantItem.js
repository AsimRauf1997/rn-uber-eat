import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export const localResturants = [
    {
        name: "Tehzeeb",
        image_url: 'https://media.istockphoto.com/photos/cafe-manager-working-behind-the-counter-picture-id1223014141?b=1&k=20&m=1223014141&s=170667a&w=0&h=XvHwBp0gwgF61KEyQHNGhCYqU5XHF-FTEDllaJOACgY=',
        catgories: ['cafe', 'Bar'],
        price: "$$",
        reviews: 1245,
        rating: 4.3
    },
    {
        name : 'Pappa Jhons',
        image_url : 'https://media.istockphoto.com/photos/close-up-of-fresh-flame-grilled-burgers-displayed-in-a-row-at-food-picture-id914886270?b=1&k=20&m=914886270&s=170667a&w=0&h=mOgqo53-eAUPgcJUFLiPbof_IR3fsrxccGjheuTYkUQ=',
        catgories : ['Indian', 'Bar'],
        price : "$$",
        reviews : 1245,
        rating : 5
    },
    {
        name: 'Savour Foods',
        image_url : 'https://media.istockphoto.com/photos/chef-serving-food-picture-id1158191245?b=1&k=20&m=1158191245&s=170667a&w=0&h=tEtgFuwA3ILOe3P54ohmshIn5KiO7YUjPUYjWxJh0G0=',
        catgories : ['Chinese', 'Bar'],
        price : "$$",
        reviews : 1100,
        rating : 3.7
    },
    {
        name:'New Yorkers',
        image_url : 'https://media.istockphoto.com/photos/restaurant-chilling-out-classy-lifestyle-reserved-concept-picture-id643847438?b=1&k=20&m=643847438&s=170667a&w=0&h=HXU3wsKzmbfOpBQis84VdUgU518Ws9PfHpKJPvX07LQ=',
        catgories : ['cafe', 'Bar'],
        price : "$$",
        reviews : 1299,
        rating : 4.3
    },
    {
        name:'Subway',
        image_url : 'https://media.istockphoto.com/photos/sign-text-closeup-for-help-wanted-with-red-and-white-colors-by-to-picture-id1284290965?b=1&k=20&m=1284290965&s=170667a&w=0&h=pbB9PFy1Q0KPNxugEy8tARaUp4Qb2rfQ4GISI6pwYlM=',
        catgories : ['cafe', 'Bar'],
        price : "$$",
        reviews : 1899,
        rating : 4.9
    },
    {
        name:'OPTP',
        image_url : 'https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=',
        catgories : ['Cafe', 'Bar'],
        price : "$$",
        reviews : 1245,
        rating : 3.8
    },
]



export default function ResturantItem({navigation, ...props}) {
    const [liked, setLiked] = useState(false)
    //const [activeTab, setActiveTab] = useState("Delivery")
   const handleOnPressLike = () =>{
        setLiked(true)
    }
    return (
        <>
        {props.resturantData.map((rest, index)=>(
                <TouchableOpacity 
                key = {index}
                onPress={()=> navigation.navigate("RestaurantDetail",{
                    name: rest.name,
                    image: rest.image_url,
                    price: rest.price,
                    reviews: rest.review_count,
                    rating: rest.rating,
                    categories: rest.categories,
                })
            } 
            activeOpacity ={1} style={{
                    marginBottom:20,
                }} >
                <View
                key = {index}
                style = {{
                marginTop: 10,
                backgroundColor:'white',
                padding: 15,
                borderRadius:10
           }}  
           >
               <ResturantImage 
               image = {rest.image_url}
               liked = {liked}
               setLiked = {setLiked}
               handleOnPressLike = {handleOnPressLike}
               />
               <ResturantInfo name = {rest.name} rating = {rest.rating} />
           </View>

           </TouchableOpacity>
            ))}
        
        
        </>
       
            
       
    )
}
const ResturantImage = (props)=>(
    <>
     <Image
    source = {{
        uri:props.image
    
    }}
    style = {{width:"100%", height:200}}

    
    
    />
    <TouchableOpacity 
    style = {{position:'absolute', right:20, top:20}}
    onPress = {() => props.handleOnPressLike()}
    >
        <MaterialCommunityIcons 
        name= {props.liked ? 'heart' : 'heart-outline'} 
        size = {25} 
        color={'white'}></MaterialCommunityIcons>
    </TouchableOpacity>
    </> 
)

const ResturantInfo = (props)=>(
    <View
    style ={{ 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 10,

        }}
    >
        <View>
        <Text style ={{fontSize:15, fontWeight:'700'}}> {props.name}</Text>
        <Text style ={{fontSize:15, color:'gray'}}> 30-45 ~ Min</Text>
        </View>
        <View
        style = {{
                backgroundColor:'#FFA07A', 
                borderRadius:15, 
                height:30, 
                width:30,
                alignItems:'center',
                justifyContent:'center'

}}
        >
        <Text > {props.rating} </Text>
        </View>
    </View>
    

)
