import { useState } from 'react';
import { StyleSheet, View,TextInput, Button, TouchableOpacity, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-native'
import ActionRedux from '../../redux/action';
import { operationSortie } from '../../utils/OperationsTypes';
import { primaryColor } from '../../utils/ThemeColors';


const AddVente = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const countries = useSelector(state => state.products.allProductList)

    const [product_id,setProductId] = useState()
    const [qte,setQTE] = useState()
    
    const submit = ()=>{
      ActionRedux.operations.addOperation(operationSortie,product_id,qte,dispatch)
      .then((response)=>{
        navigate(-1)
      })
      .catch(error => console.log(error))
    }
    return (
          <View style={styles.container}>
              <Text style={styles.titleText}>Faire une opération de vente</Text>
              <View style={styles.inputView}>
                  <SelectDropdown
                      data={countries}
                      selectedRowTextStyle = {styles.titleText}
                      buttonStyle={styles.inputView}
                      onSelect={(selectedItem, index) => {
                          console.log("selectedItem", selectedItem.id)
                          setProductId(selectedItem.id)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.name
                      }}
                      rowTextForSelection={(item, index) => {
                        return item.name
                      }}
                  />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                      placeholder='Quantité'
                      style={styles.TextInput}
                      placeholderTextColor="#003f5c"
                      onChangeText={(text) => setQTE(text)}
                      />
              </View>
              <TouchableOpacity onPress={submit} style={styles.loginBtn}>
                <Text style={styles.loginText}>Vendre</Text>
              </TouchableOpacity>
          </View>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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
export default AddVente;