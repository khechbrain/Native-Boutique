import { useState } from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-native'
import ActionRedux from '../../redux/action';


const UpdateCategory = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentCategory = useSelector(state => state.categories.currentCategory)

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    
    const submit = ()=>{
      ActionRedux.categories.updateCategory({id:currentCategory.id,name,description},dispatch)
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
                        defaultValue={currentCategory.name}
                        placeholder='Nom'
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setName(text)}
                        />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        defaultValue={currentCategory.description}
                        placeholder='Description'
                        style={styles.TextInput}
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) => setDescription(text)}
                        />
                </View>
                <View style={styles.loginBtn}>
                    <Button title='Mettre a jours' onPress={submit}></Button>
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
export default UpdateCategory;