import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import {useNavigate} from 'react-router-native';
import ActionRedux from '../../redux/action';
import { primaryColor } from '../../utils/ThemeColors';
import {useSelector} from 'react-redux';
import { operationEntree, operationSortie } from '../../utils/OperationsTypes';
import {Text,Header,CardItem} from 'native-base';

const ListVentes = () => {
    const navigate = useNavigate()

    const operationsList = useSelector(state => state.operations.operationsList)
    const productsList = useSelector(state => state.products.allProductList)

    const getProductById = (id)=>{
        return productsList.filter(product => product.id === id)[0]
    }
    return (
        <View  style={styles.container}>
            <Text style={styles.addBtn} onPress={()=>navigate('add')}>+</Text>
            <ScrollView>
                {
                    operationsList.map((opera,index)=>{
                        if(opera.operation === operationSortie){
                            let product = getProductById(opera.product_id)
                            return(     
                                <View key={index}>
                                    <CardItem style={styles.cardView}>
                                        <View style={{flex:1}}>
                                            <View style={styles.locationRowContainer}>
                                                <View style={styles.imageContainer}>
                                                    <Image style={styles.image} source={{uri:product.img}}></Image>
                                                </View>
                                                <View style={styles.addressContainer}>
                                                    <Text style={styles.locationTitle}>
                                                        {product.name}
                                                    </Text>
                                                    <Text style={styles.locationDesc}>
                                                        Quantitée: <Text style={styles.qte}>-{opera.qte}</Text>
                                                    </Text>
                                                </View>
                                            </View>

                                        </View>
                                    </CardItem>
                                </View>
                            )
                        }
                    })
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:"100%",
    },
    cardView:{
      elevation:5,
      marginTop:8,
      borderRadius:5,
      marginHorizontal:8
    },
    locationRowContainer:{
      flexDirection:'row',
    },
    addressContainer:{
      flex:3,
      justifyContent:'center',
      alignItems:'flex-start',
    },
    imageContainer:{
        marginRight:6
    },
    image:{
        width:50,
        height:50
    },
    locationTitle:{
      fontSize:16,
      fontWeight:'bold',
      color:'black'
    },
    locationDesc:{
      fontSize:16,
      color:'#555'
    },
    qte:{
        color:'red',
        fontWeight:"bold"
    },
    addBtn:{
        width: 60,
        height: 60,
        borderRadius: 30,            
        backgroundColor: primaryColor,                                    
        position: 'absolute',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',                             
        bottom: 20,                                                    
        right: 20, 
        fontSize:42,
        color:"white",
        zIndex:200
    }
})
export default ListVentes;