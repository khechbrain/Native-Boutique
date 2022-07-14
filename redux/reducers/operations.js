
// THE REDUCER KEYS
export const SET_OPERTATIONS_LIST_KEY = "setOperationsList"
export const SET_ALL_OPERTATIONS_LIST_KEY = "setAllOperationsList"

const initialStete = {
  operationsList:[],
  allOperationsList:[],
}
export default function products(state = initialStete, {type,payload}) {
    switch (type) {
      case SET_OPERTATIONS_LIST_KEY:
        return {...state, operationsList:payload}
      case SET_ALL_OPERTATIONS_LIST_KEY:
        return {...state, allOperationsList:payload}
      default:
        return state
    }
  }