import { Text, View,Image, ScrollView, Button, Modal, Pressable, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ActionRedux from '../../redux/action';
import {Route, Routes, useNavigate} from 'react-router-native'

const ProductsList = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
            s.shadow
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
            s.textNoWrap
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
        ]
    }
    const updateProduct = (product)=>{
        ActionRedux.products.setCurrentProduct(product,dispatch)
        navigate('updateProduct')
    }
    const deleteProduct = (product)=>{

    }
    const showDetails = (product)=>{
        navigate('details')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.addBtn} onPress={()=>navigate('addProduct')}>+</Text>
            <ScrollView horizontal={false} contentContainerStyle ={bootstrap.rowDiv}>
                <View style={bootstrap.rowDiv} >
                    {
                        productsList.map((product,index) =>{
                            return (
                                <View key={index} style={bootstrap.card} >
                                    <View style={bootstrap.rowDiv}>
                                        <Image source={{uri:product.img}} style={styles.image} ></Image>
                                    </View>
                                    <View style={bootstrap.rowDiv}>
                                        <Text style={bootstrap.title} onPress={()=>showDetails(product)}>{product.name}</Text>
                                    </View>
                                    <View style={bootstrap.rowDiv}>
                                        <Text style={bootstrap.pu}>${product.pu}</Text>
                                    </View>
                                </View>
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
        width:"100%"
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
        backgroundColor: '#4b4dc9',                                    
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