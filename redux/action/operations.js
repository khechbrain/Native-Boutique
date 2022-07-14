import axios from "axios"
import ActionRedux from "."
import { baseUrl } from "../../utils/ApiInfos"

// THE REDUCER KEYS
const SET_OPERTATIONS_LIST_KEY = "setOperationsList"
const SET_ALL_OPERTATIONS_LIST_KEY = "setAllOperationsList"

const operations = {
    addOperation(auType,product_id,qte,dispatch){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"operation",{
                "jsonrpc":"2.0",
                "params":{
                    auType,
                    product_id,
                    qte
                }
            })
            .then(response => {
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
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    getOperations(dispatch){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"get_stocks",{})
            .then(response => {
                let list = response.data.result.response
                dispatch({type:SET_OPERTATIONS_LIST_KEY, payload:list})
                dispatch({type:SET_ALL_OPERTATIONS_LIST_KEY, payload:list})
                resolve(list)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
}
export default operations