import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-native';
import ActionRedux from '../../redux/action';
import { primaryColor } from '../../utils/ThemeColors';

const CategoriesList = () => {
    const dispatch = useDispatch()
    const [focused, setFocused] = useState('all')
    let categoriesList = useSelector(state => state.categories.categoryList)
    // categoriesList = [...categoriesList,...categoriesList,...categoriesList]

    const filterProducts=(id)=>{
        setFocused(id)
        ActionRedux.products.filterProducts(id,dispatch)
    }
    return (
        <View style ={styles.container}>
            <ScrollView horizontal={true}>
            <Text style={focused==='all'? styles.cardActive:styles.card} onPress={()=>filterProducts('all')}>All</Text>
                {
                    categoriesList.map((category,index) =>{
                        return <Text key={index} style={focused===category.id? styles.cardActive:styles.card} onPress={()=>filterProducts(category.id)}>{category.name}</Text>
                    })
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width:"100%",
        overflow:'hidden',
        // backgroundColor: '#ccc',
        borderBottomWidth:1,
        borderBottomColor:'grey'

    },
    card:{
        marginHorizontal:10,
        padding:10,
        fontSize:15,
        fontWeight:'bold',
        color:'#555'
    },
    cardActive:{
        marginHorizontal:10,
        padding:10,
        fontSize:15,
        fontWeight:'bold',
        color:primaryColor,
        borderBottomWidth:2,
        borderBottomColor:primaryColor
    },
})

export default CategoriesList;