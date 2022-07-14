import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {useNavigate,Route,Routes} from 'react-router-native';
import AddVente from './AddVente';
import ListVentes from './ListVentes';

const Ventes = () => {
    
    return (
        <View style={styles.container}>
          <Routes>
            <Route path='' element={<ListVentes/>}></Route>
            <Route path='add' element={<AddVente/>}></Route>
          </Routes>
        </View>
    );
};

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    width:"100%",
  },
})
export default Ventes;