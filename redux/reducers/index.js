import { combineReducers } from 'redux'
import categories from './categories'
import products from './products'
import operations from './operations'
import navigations from './navigations'
export default combineReducers({
  categories,
  products,
  operations,
  navigations,
})