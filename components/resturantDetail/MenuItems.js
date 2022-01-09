import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
const foods = [
    
    {
        title:'Pizza With Topping',
        description: 'Traditional Pizza with Extra Topping As you Like ',
        price:'$10.20',
        image:'https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4='
    },
    {
        title:'Russian Salad',
        description: 'Its a Russian Salad with alot of options that you can choose ',
        price:'$11.20',
        image:'https://media.istockphoto.com/photos/mix-salad-in-a-plate-on-a-white-background-top-view-picture-id1305500593?b=1&k=20&m=1305500593&s=170667a&w=0&h=FczwyEVkyt6EykwWgGF30_RJu_XvvY79hqxb9EwvyWA='
    },
    {
        title:'Beef Burger',
        description: 'This Burger has Beef Patty and is enriched with cheese',
        price:'$07.50',
        image:'https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM='
    },
    
];



export default function MenuItems({restaurantName}) {
    const cartItems = useSelector((state)=> state.cartReducer.selectedItems.items);
    const isFoodInCart  = (food,cartItems) =>
        Boolean(cartItems.find((item)=> item.title === food.title))
    
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
    type:'ADD_TO_CART',
    payload: {
        ...item, 
        restaurantName: restaurantName,
        checkboxValue: checkboxValue 
    
    }
})
    return (
        <ScrollView 
        showsVerticalScrollIndicator = {false}>
             {foods.map((food,index)=>(
                 <View key={index}>
                    <View style={styles.menuItemStyle}>
                     <BouncyCheckbox
                     iconStyle={{
                         borderColor:'lightgray',
                     }}
                     fillColor='green'
                     onPress={(checkboxValue)=> selectItem(food, checkboxValue)}
                     isChecked = {isFoodInCart(food,cartItems)}
                     />   
                    <FoodInfo food = {food}/>
                    <FoodImage food = {food}/>
                    </View>
                    <Divider width = {0.5} orientation='vertical'/>
                </View>
             ))}
        
        </ScrollView>
       
        
        
        
        
    )
}
const FoodInfo =(props)=>(
    <View style = {{width:240, justifyContent:'space-evenly'}}>
        <Text style = {styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)
const FoodImage = (props)=>(
    <View>
        <Image
        source = {{uri: props.food.image}}  
        style ={{width:100, height:100, borderRadius:8}}
        />
    </View>
)
const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 20,
    },
    title:{
        fontSize:20,
        fontWeight:'700',
    }
})