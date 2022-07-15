import { Text, View,Image, ScrollView, Button, Modal, Pressable, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ActionRedux from '../../redux/action';
import CategoriesList from '../category/CategoriesList';
import { primaryColor } from '../../utils/ThemeColors';
import ToolbarComponent from '../ToolbarComponent';
import { addProduct_KEY, detailsProduct_KEY } from '../HomePage';

const ProductsList = (props) => {
    const { navigation, route } = props
    
    const dispatch = useDispatch()
    let productsList = useSelector(state => state.products.productList)
    // productsList = [...productsList,...productsList,...productsList,...productsList,...productsList]

    const bootstrapStyleSheet = new BootstrapStyleSheet();
    const { s, c } = bootstrapStyleSheet;

    const bootstrap = {
        card:[
            {
                margin:'1%',
                // borderRadius:5,
                backgroundColor:'white'
            },
            s.rounded,
            s.shadow,
        ],
        title:[ 
            s.textCenter,
            s.h5,
            s.fontWeightBold

        ],
        desc:[ 
            s.textCenter,
            s.h6,
            s.textSecondary,
            s.textNoWrap
        ],
        pu:[ 
            s.textCenter,
            s.h6,
            s.textDark,
            s.textNoWrap,
            s.mr4
        ],
        qte:[
            s.h6,
            {
                fontWeight:'bold'
            }
        ],
        category:[ 
            s.textCenter,
            s.h6,
            s.textWhite,
            s.p2,
            s.rounded,
            s.textNoWrap,
            s.mx3,
            s.fontWeightBold,
            {
                backgroundColor:'#fc1e82'
            },
        ],
        rowDiv:[
            s.row,
            s.justifyContentCenter
        ],
        rowContainer:[
            s.row,
            s.justifyContentCenter,
            {
                marginTop:5
            }
        ]
    }
    const updateProduct = (product)=>{
        ActionRedux.products.setCurrentProduct(product,dispatch)
        navigation.navigate('updateProduct')
    }
    const showDetails = (product)=>{
        ActionRedux.products.setCurrentProduct(product,dispatch)
        navigation.navigate(detailsProduct_KEY)
    }
    return (
        <View style={styles.container}>
            <ToolbarComponent {...props} title='Liste des produits' />
            <Text style={styles.addBtn} onPress={()=>navigation.navigate(addProduct_KEY)}>+</Text>
            <CategoriesList/>
            <ScrollView horizontal={false} contentContainerStyle ={bootstrap.rowDiv}>
                <View style={bootstrap.rowContainer} >
                    {
                        productsList.map((product,index) =>{
                            return (
                                <TouchableOpacity key={index} style={bootstrap.card} onPress={()=>showDetails(product)} >
                                    <View style={bootstrap.rowDiv}>
                                        <Image source={{uri:product.img}} style={styles.image} ></Image>
                                    </View>
                                    <View style={bootstrap.rowDiv}>
                                        <Text style={bootstrap.title} onPress={()=>showDetails(product)}>{product.name}</Text>
                                    </View>
                                    <View style={bootstrap.rowDiv}>
                                        <Text style={bootstrap.pu}>prix: <Text style={bootstrap.qte}>{product.pu}F</Text></Text>
                                        <Text>qt: <Text style={bootstrap.qte}>{product.qte}</Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:"100%",
    },
    card:{
        margin:'1%',
        borderRadius:20,
        backgroundColor:'white'
    },
    image:{
        width: '47%',
        height: 100,
        resizeMode: 'stretch'
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

export default ProductsList;