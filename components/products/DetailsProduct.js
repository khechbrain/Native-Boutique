import { Card, CardItem } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux';
import { primaryColor } from '../../utils/ThemeColors';
import ToolbarComponent from '../ToolbarComponent';

const DetailsProduct = (props) => {
    const currentProduct = useSelector(state => state.products.currentProduct)
    const operationsList = useSelector(state => state.operations.operationsList).reverse()
    console.log(currentProduct);

    return (
      <>
        <ToolbarComponent {...props} title="Détails du produit" />
        <View style={styles.container}>
            <Card style={styles.cardView}>
              <CardItem style={styles.cardView}>
                  <Image style={styles.image} source={{uri:currentProduct.img}}></Image>
              </CardItem>
              <CardItem>
                  <Text style={styles.locationTitleContainer}>Nom: <Text style={styles.locationTitle}>{currentProduct.name}</Text></Text>
                  <Text style={styles.locationPUContainer}>Prix: <Text style={styles.locationPU}>{currentProduct.pu}F</Text></Text>
              </CardItem>
              <CardItem>
                  <Text style={styles.locationTitleContainer}>Quantité: <Text style={styles.locationTitle}>{currentProduct.qte}</Text></Text>
                  <Text style={styles.locationPUContainer}>Prix Totale: <Text style={styles.locationPU}>{currentProduct.prix_total}F</Text></Text>
              </CardItem>
              <CardItem style={styles.cardView}>
                  <Text style={styles.locationDesc}>{currentProduct.description}</Text>
              </CardItem>
            </Card>
        </View>
      </>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:10
    },
    cardView:{
      justifyContent:'center',
      borderRadius:10
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
        // flex:1,
        width:200,
        height:200
    },
    locationTitle:{
      fontSize:16,
      fontWeight:'bold',
      color:'black'
    },
    locationTitleContainer:{
      textAlign:'left',
      flex:1,
      paddingRight:15
    },
    locationPU:{
      fontSize:16,
      fontWeight:'bold',
      color:'black',
    },
    locationPUContainer:{
      textAlign:'left',
      flex:1,
      paddingLeft:15,
      borderLeftWidth:2,
      borderLeftColor:'#ccc'
    },
    locationDesc:{
      flex:1,
      borderTopWidth:2,
      borderTopColor:'#eee',
      textAlign:'center',
      paddingTop:15,
    },
    qte:{
        color:'green',
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
export default DetailsProduct;