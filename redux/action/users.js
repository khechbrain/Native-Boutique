import axios from "axios"
import { ToastAndroid } from "react-native"
import ActionRedux from "."
import { baseUrl } from "../../utils/ApiInfos"

const users = {
    signIn(login,password,dispatch){
        return new Promise((resolve,reject)=>{

            axios.post(baseUrl+"api/session/login",{
    
                "jsonrpc":"2.0",
                "params":{
                    login,
                    password
                }
            })
            .then(response => {
                if(response.data.result){
                    ActionRedux.categories.getCategoryList(dispatch)
                    .then((response)=>{
                        ActionRedux.products.getProductList(dispatch)
                        .then(response => {
                            ActionRedux.operations.getOperations(dispatch)
                            .then(response =>{
                                resolve(response)
                            })
                        })
                        .catch(error => {
                            console.log("Erreur Getting Products: ", error)
                            reject(error)
                        })
                    })
                    .catch(error => {
                        console.log("Erreur Getting Categories: ", error)
                        reject(error)
                    })
                }else{
                    let msg ='Email ou password non valide'
                    ToastAndroid.show(msg,ToastAndroid.SHORT)
                    reject(msg)
                }
            })
            .catch(error => {
                console.log("Erreur Connexion: ", error)
                reject(error)
            })
        })
    }
}
export default users