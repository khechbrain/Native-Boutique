
// THE REDUCER KEYS
export const ADD_CATEGORY_KEY = "addCategory"
export const UPDATE_CATEGORY_KEY = "updateCategory"
export const SET_CATEGORYLIST_KEY = "setCategoryList"
export const SET_ALL_CATEGORYLIST_KEY = "setAllCategoryList"
export const SET_CURRENT_CATEGORY_KEY = "setcurrentCategory"
export const FILTER_CATEGORY_LIST_KEY = "filterCategoryList"

const initialStete = {
  allCategoryList:[],
  categoryList:[],
  currentCategory:{}
}
export default function categories(state = initialStete, {type,payload}) {
    switch (type) {
      case SET_CURRENT_CATEGORY_KEY:
        return {...state,currentCategory:payload }
      case SET_CATEGORYLIST_KEY:
        return {...state,categoryList:payload }
      default:
        return state
    }
  }