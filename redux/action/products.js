import axios from "axios"
import { baseUrl } from "../../utils/ApiInfos"

// THE REDUCER KEYS
export const ADD_PRODUCT_KEY = "addProduct"
export const UPDATE_PRODUCT_KEY = "updateProduct"
export const SET_PRODUCTLIST_KEY = "setProductList"
export const SET_ALL_PRODUCTLIST_KEY = "setAllProductList"
export const SET_CURRENT_PRODUCT_KEY = "setcurrentProduct"
export const FILTER_PRODUCT_LIST_KEY = "filterProductList"

const products = {
    addProduct({name,description,qte,pu,category_id}){
        axios.post(baseUrl+"create_product",{
            "jsonrpc":"2.0",
            "params":{
                name,
                description,
                qte,
                pu,
                category_id
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.log("Erreur: ", error))
    },
    updateProduct(dispatch,formData,id){
        return new Promise((resolve,reject)=>{
            
        })
    },
    setProductList(dispatch){
        axios.post(baseUrl+"get_products",{})
        .then(response => {
            // console.log(response.data.result.response);
            dispatch({type:SET_PRODUCTLIST_KEY,payload:response.data.result.response})
        })
        .catch(error => console.log("Erreur: ", error))
    },
    setCurrentProduct(product,dispatch){
        dispatch({type:SET_CURRENT_PRODUCT_KEY,payload:product})
    },
}
export default products