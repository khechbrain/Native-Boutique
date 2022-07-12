import axios from "axios"
import { baseUrl } from "../../utils/ApiInfos"

// THE REDUCER KEYS
export const ADD_CATEGORY_KEY = "addCategory"
export const UPDATE_CATEGORY_KEY = "updateCategory"
export const SET_CATEGORYLIST_KEY = "setCategoryList"
export const SET_ALL_CATEGORYLIST_KEY = "setAllCategoryList"
export const SET_CURRENT_CATEGORY_KEY = "setcurrentCategory"
export const FILTER_CATEGORY_LIST_KEY = "filterCategoryList"

const categories = {
    setCurrentCategory(category,dispatch){
        dispatch({type:SET_CURRENT_CATEGORY_KEY,payload:category})
    },
    addCategory({name,description},dispatch){
        return new Promise((resolve,reject)=>{    
            axios.post(baseUrl+"create_category",{
                "jsonrpc":"2.0",
                "params":{
                    name,
                    description
                }
            })
            .then(response => {
                console.log(response.data);
                this.setCategoryList(dispatch)
                resolve(response.data)
            })
            .catch(error => console.log("Erreur: ", error))
            })
    },
    deleteCaegory(id,dispatch){
        axios.post(baseUrl+"delete_category",{
            "jsonrpc":"2.0",
            "params":{
                id
            }
        })
        .then(response => {
            console.log(response.data);
            this.setCategoryList(dispatch)
        })
        .catch(error => console.log("Erreur: ", error))
    },
    updateCategory({id,name,description},dispatch){
        return new Promise((resolve,reject)=>{    
            axios.post(baseUrl+"create_category",{
                "id":id,
                "jsonrpc":"2.0",
                "params":{
                    id,
                    name,
                    description
                }
            })
            .then(response => {
                console.log(response.data);
                this.setCategoryList(dispatch)
                resolve(response.data)
            })
            .catch(error => console.log("Erreur: ", error))
            })
    },
    setCategoryList(dispatch){
        axios.post(baseUrl+"get_categories",{})
        .then(response => {
            // console.log(response.data.result.response);
            dispatch({type:SET_CATEGORYLIST_KEY,payload:response.data.result.response})
        })
        .catch(error => console.log("Erreur: ", error))
    },
}
export default categories