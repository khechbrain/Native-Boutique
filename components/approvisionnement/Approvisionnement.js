import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {useNavigate,Route,Routes} from 'react-router-native';
import { primaryColor } from '../../utils/ThemeColors';
import AddApprovisionnement from './AddApprovisionnement';
import ListApprovisionnement from './ListApprovisionnement';

const Approvisionnement = () => {
    
    return (
        <View style={styles.container}>
          <Routes>
            <Route path='' element={<ListApprovisionnement/>}></Route>
            <Route path='add' element={<AddApprovisionnement/>}></Route>
          </Routes>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15
  },
  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: primaryColor,
  },
  loginText:{
    color:'white',
    fontWeight:'bold'
  }
});

export default Approvisionnement;