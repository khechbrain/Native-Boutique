import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const UpdateProduct = () => {

    const [name,setName] = useState('')
    const product = useSelector((state)=> state.products.currentProduct)

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    placeholder=""
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setName(text)}
                    />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder=""
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setName(text)}
                    />
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
export default UpdateProduct;