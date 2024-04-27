import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ProductsListReducers,ProductsDetailReducers } from './reducers/ProductsReducers';
import { userLoginReducers,userSignupReducers } from './reducers/UserReducers';
import { cartReducers } from './reducers/CartReducers';


const reducer = combineReducers({
    productsList:ProductsListReducers,
    productDetail:ProductsDetailReducers,
    userLogin:userLoginReducers,
    userSignup:userSignupReducers,
    cart:cartReducers
})

const cartItemsFromStorage=localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('CartItems')):[]


const initialState={
    cart:{cartItems:cartItemsFromStorage}
}
const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;