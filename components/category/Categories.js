import { Text, View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import AddCategory from './AddCategory';
import CategoriesList from './CategoriesList';
import UpdateCategory from './UpdateCategory';

const Categories = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path='' element={<CategoriesList/>}></Route>
                <Route path='addCategory' element={<AddCategory/>}></Route>
                <Route path='updateCategory' element={<UpdateCategory/>}></Route>
            </Routes>
            
        </View>
    );
};

const styles = {
    container:{   
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
        alignItems: 'center',
    }
}
export default Categories;