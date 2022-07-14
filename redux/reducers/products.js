
// THE REDUCER KEYS
export const ADD_PRODUCT_KEY = "addProduct"
export const UPDATE_PRODUCT_KEY = "updateProduct"
export const SET_PRODUCTLIST_KEY = "setProductList"
export const SET_ALL_PRODUCTLIST_KEY = "setAllProductList"
export const SET_CURRENT_PRODUCT_KEY = "setcurrentProduct"
export const FILTER_PRODUCT_LIST_KEY = "filterProductList"

const initialStete = {
  allProductList:[],
  productList:[],
  currentProduct:{}
}
export default function products(state = initialStete, {type,payload}) {
    switch (type) {
      case SET_CURRENT_PRODUCT_KEY:
        return {...state,currentProduct:payload }
      case FILTER_PRODUCT_LIST_KEY:
        if(payload === 'all'){
          return {...state,productList: state.allProductList }
        }
        return {...state,productList: state.allProductList.filter(product => product.category_id === payload) }
      case SET_PRODUCTLIST_KEY:
        return {...state,productList:payload }
      case SET_ALL_PRODUCTLIST_KEY:
        return {...state,allProductList:payload }
      default:
        return state
    }
  }