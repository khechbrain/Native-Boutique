import { useState } from "react";
import { StyleSheet, TextInput, View,Text, Button } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useSelector } from "react-redux";
import ActionRedux from "../../redux/action";

const AddProduct = () => {

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [qte,setQTE] = useState()
    const [pu,setPU] = useState()
    const [category_id,setCategorytId] = useState()
    
    const categories = useSelector(state => state.categories.categoryList)

    const submit =()=>{
      let product = {
        name,
        description,
        qte,
        pu,
        category_id
      }
      ActionRedux.products.addProduct(product)
    }
    return (
        <View style={styles.container}>
            <Text>َAjouter un produit</Text>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Nom"
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setName(text)}
                    />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Description"
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setDescription(text)}
                    />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Quantité"
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setQTE(text)}
                    />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Prix unitaire"
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setPU(text)}
                    />
            </View>
            <View style={styles.inputView}>
                    <SelectDropdown
                        data={categories}
                        onSelect={(selectedItem, index) => {
                            console.log("selectedItem", selectedItem.id)
                            setCategorytId(selectedItem.id)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem.name
                        }}
                        rowTextForSelection={(item, index) => {
                          return item.name
                        }}
                    />
            </View>
            <Button style={styles.loginBtn} title="Ajouter" onPress={submit}></Button>
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
export default AddProduct;