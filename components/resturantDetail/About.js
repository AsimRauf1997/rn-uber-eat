import React from 'react'
import { View, Text, Image } from 'react-native'
export default function About( props ) {
    const {name, image, price, reviews, rating, categories} = props.route.params;
    const formattedCategoreis = categories.map(cat=> cat.title).join("~")
    const description = `${formattedCategoreis} ${price ? "~" : ""} 💳 ~ ${rating}🌟(${reviews}+)`;
    return (
        <View>
        <ResturantImage image = {image}/> 
        <ResturantName name = {name}/> 
        <ResturantDescription description = {description}/> 
        </View>
    )
}

const ResturantImage = ({image}) =>(
    <Image source = {{uri:image}} style = {{ width:"100%", height: 220}}/>
)

const ResturantName = ({name})=>(
    <Text
    style = {{
        fontSize:30,
        fontWeight:"600",
        marginTop: 10,
        marginHorizontal:15
    }}
    >{name}</Text>
)
const ResturantDescription = ({description})=>(
    <Text
    style = {{
        fontSize:16,
        fontWeight:"400", 
        marginHorizontal:15,
    }}>{description}</Text>
)