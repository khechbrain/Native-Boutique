import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './ProductsList';
import {Routes,Route} from 'react-router-native';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';

const Products = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='*' element={<ProductsList/>} />
                <Route path='addProduct' element={<AddProduct/>} />
                <Route path='updateProduct' element={<UpdateProduct/>} />
            </Routes>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{   
        flex: 1,
        width:"100%",
        backgroundColor: '#eee',
        alignItems: 'center',
        paddingTop:10
    }
}) 
export default Products;