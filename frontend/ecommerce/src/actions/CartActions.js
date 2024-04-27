import axios from 'axios'
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from '../constants/CartConstants'

export const addToCart=(slug,qty)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/product/${slug}`)

    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data.slug,
            name:data.product_name,
            image:data.product_image,
            price:data.product_price,
            countInStock:data.product_stock,
            qty
        }
    })
    localStorage.setItem('CartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(slug)=>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:slug,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}