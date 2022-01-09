import React, {useState} from 'react' 
import { View, Text,TouchableOpacity, Modal, StyleSheet } from 'react-native'
import {useSelector} from 'react-redux'
import OrderItem from './OrderItem'
//import firebase from '../../databse'
export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false)
    const {items, restaurantName} = useSelector((state)=> state.cartReducer.selectedItems);
    const total = items
    .map((item)=> Number(item.price.replace('$', '0')))
    .reduce((prev, curr)=> prev + curr, 0);
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })
    console.log(totalUSD);

    // const addOrderToFirebase = () => {
    //     const db = firebaseConfig.firestore();
    //     db,collection("orders").
    //     add({
    //         items: items,
    //         restaurantName: restaurantName,
    //         createdAt: firebaseConfig.firestore.FieldValue.serverTimestamp()
    //     });
    //     setModalVisible(false)
    // }


    const checkOutModalContext = () =>{
        return(
            <>
            <View style = {styles.modalContainer}>
                <View style = {styles.modalCheckoutContainer}>
                    <Text style = {styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index)=>(
                        <OrderItem key={index} item = {item}/>
                    ))}
                      <View style = {styles.subTotalContainer}>
                        <Text style ={styles.subTotalText}>SubTotal</Text>
                          <Text style ={styles.subTotalText}>{totalUSD}$</Text>
                      </View>
                      <View 
                      style = {{
                          flexDirection:'row',
                          justifyContent:'center',
                          alignItems:'center',
                          }}>
                          <TouchableOpacity
                          style = {{
                            marginTop:20,
                            backgroundColor:'black',
                            alignItems:'center',
                            padding:15,
                            borderRadius:30,
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            width:300,
                            position:'relative'
                          }}
                          onPress={()=>  setModalVisible(false)}
                          >
                              <Text
                              style = {{color:'white',
                              fontSize:20,
                              marginRight:30,
                              
                            }}
                              >CheckOut</Text>
                              <Text
                              style = {{
                                  color:'white',
                                  fontSize:20,
                            }}
                              >{total? totalUSD : ""}$</Text>
                              
                          </TouchableOpacity>
                      </View>
                </View>
              
            </View>
            </>
            
        )
    }

    return (
       
       <>
        <Modal 
        animationType='fade'
        visible = {modalVisible}
        transparent = {true}
        onRequestClose={()=> setModalVisible(false)}
        
        >
            {checkOutModalContext()}
        </Modal>
       {total ? (
           <View style = {{
            position:'absolute',
            flex:1,
            alignItems:'center',
            bottom:-120
        }}>
             <View style={{
            flexDirection:'row',
            justifyContent:'center',
            width:'100%',
            marginLeft:20,

        }}>
            <TouchableOpacity
            style={{
                marginTop:20,
                backgroundColor:'black',
                alignItems:'center',
                padding:15,
                borderRadius:30,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-end',
                width:300,
                position:'relative'
            }}
            onPress={()=> setModalVisible(true)}
            >
            <Text
            style = {{
                color:'white',
                fontSize:20,
                marginRight:30,
            }}
            >View Cart</Text>
            <Text
            style = {{
                color:'white',
                fontSize:20,
                
            }}
            >{totalUSD}$</Text>
            </TouchableOpacity>
            
        </View>
        </View>
       )  : (<></>)}
       
       </>
        
       
    )
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer:{
        backgroundColor:'white',
        padding:16,
        height:500,
        borderWidth:1,
    },
    restaurantName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:22,
        marginBottom:10,
    },
    subTotalContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 15,
        marginHorizontal:10,

    },
    subTotalText:{
        textAlign:'left',
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10,
       
    }
})
