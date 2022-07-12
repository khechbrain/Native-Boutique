import React from 'react';
import { Button, View } from 'react-native';
import {useNavigate,Route,Routes} from 'react-router-native';
import AddVente from './AddVente';
import ListVentes from './ListVentes';

const Ventes = () => {
    
    return (
        <View>
          <Routes>
            <Route path='' element={<ListVentes/>}></Route>
            <Route path='add' element={<AddVente/>}></Route>
          </Routes>
        </View>
    );
};

export default Ventes;