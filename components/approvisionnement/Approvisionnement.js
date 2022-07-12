import React from 'react';
import { Button, View } from 'react-native';
import {useNavigate,Route,Routes} from 'react-router-native';
import AddApprovisionnement from './AddApprovisionnement';
import ListApprovisionnement from './ListApprovisionnement';

const Approvisionnement = () => {
    
    return (
        <View>
          <Routes>
            <Route path='' element={<ListApprovisionnement/>}></Route>
            <Route path='add' element={<AddApprovisionnement/>}></Route>
          </Routes>
        </View>
    );
};

export default Approvisionnement;