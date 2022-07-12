import axios from 'axios';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, ToastAndroid, View, List} from 'react-native';
import { baseUrl } from '../utils/ApiInfos';
import { Navigate, Route, Routes, useNavigate } from "react-router-native";
import {useSelector,useDispatch} from 'react-redux'
import ActionRedux from '../redux/action';
import Categories from './category/Categories';
import Products from './products/Products';
import Approvisionnement from './approvisionnement/Approvisionnement';
import Ventes from './ventes/Ventes';

import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

export default function HomePage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  let store = useSelector((state)=> state)
  
  useEffect(()=>{
    ActionRedux.categories.setCategoryList(dispatch)
    ActionRedux.products.setProductList(dispatch)
  },[])
  const showStore = ()=>{
    console.log("Ma Boutique:\n",store);
  }
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Toolbar>
          <ToolbarBackAction
            onPress={()=> navigate(-1)}
          />
          <ToolbarContent
            title="Ma boutique"
          />
          {/* <ToolbarAction icon="search" 
            // onPress={this._onSearch}
           />
          <ToolbarAction icon="more-vert" 
            // onPress={this._onMore}
             /> */}
        </Toolbar>
      </View>
      <Routes>
        {/* <Route path='' element={
          <View>
            <Text >Accueil</Text>
            <Button onPress={()=>navigate('categories')}  title='Liste des catégories'></Button>
            <Button onPress={()=>navigate('products')} title='Liste des produits'></Button>
            <Button onPress={()=>navigate('approvisionnement')} title='Liste des entrées'></Button>
            <Button onPress={()=>navigate('ventes')} title='Liste des sorties'></Button>
          </View>
        }></Route> */}
        <Route path='' element={<Navigate to={'products'}/>}></Route>
        <Route path='categories/*' element={<Categories/>}></Route>
        <Route path='products/*' element={<Products/>}></Route>
        <Route path='approvisionnement/*' element={<Approvisionnement/>}></Route>
        <Route path='ventes/*' element={<Ventes/>}></Route>
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  toolbar:{
    width:'100%',
  },
  backBtn:{
    width:'10%',
  }
});