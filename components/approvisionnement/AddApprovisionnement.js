import { useState } from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-native'
import ActionRedux from '../../redux/action';


const AddApprovisionnement = () => {
    
    const navigate = useNavigate()
    const countries = useSelector(state => state.products.productList)

    const [name,setName] = useState('')
    const [product_id,setProductId] = useState()
    const [qte,setQTE] = useState()
    
    const submit = ()=>{
      ActionRedux.approvionnements.addApprovisionnement(name,product_id,qte)
      .then((response)=>{
        navigate(-1)
      })
      .catch(error => console.log(error))
    }
    return (
        <View >
            
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Nom'
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setName(text)}
                        />
                </View>
                <View style={styles.inputView}>
                    <SelectDropdown
                        data={countries}
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
                <View style={styles.loginBtn}>
                    <Button title='Ajouter' onPress={submit}></Button>
                </View>
            </View>
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
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
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
      backgroundColor: "#FF1493",
    },
  });
export default AddApprovisionnement;