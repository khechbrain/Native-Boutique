import { useState } from 'react';
import { Button, Image, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import {useNavigate} from 'react-router-native'
import { baseUrl } from '../utils/ApiInfos';
import Cookie from 'react-native-cookie';
import ActionRedux from '../redux/action';
import {useDispatch} from 'react-redux';
import { primaryColor } from '../utils/ThemeColors';

export default function LoginPage() {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const submit = ()=>{
    ActionRedux.users.signIn(login,password,dispatch)
    .then(response =>{
      navigate('home')
    })
  }
  const logout = ()=>{

    axios.post(baseUrl+"api/session/logout",{})
    .then(response => {
      
    })
    .catch(error => console.log("Erreur: ", error))
  }
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={"https://cdn-icons-png.flaticon.com/512/126/126122.png"} /> */}
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(login) => setLogin(login)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={submit} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
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