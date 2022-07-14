import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './ProductsList';
import {Routes,Route} from 'react-router-native';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import DetailsProduct from './DetailsProduct';



const Products = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='*' element={<ProductsList/>} />
                <Route path='add' element={<AddProduct/>} />
                <Route path='update' element={<UpdateProduct/>} />
                <Route path='details' element={<DetailsProduct/>} />
            </Routes>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{   
        flex: 1,
        width:"100%",
        backgroundColor: '#eee',
        // alignItems: 'center',
    }
}) 
export default Products;