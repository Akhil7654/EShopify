import axios from "axios";
import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_FAIL,PRODUCT_DETAIL_SUCCESS } from "../constants/ProductsConstants";



export const ListProducts = () => async (dispatch) => {
    try{
        dispatch({type : PRODUCT_LIST_REQUEST})
        const { data } = await axios.get(`/api/products`);

        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch ({
        type : PRODUCT_LIST_FAIL,
        payload:error.response && error.response.data.detail ? error.response.data.detail : error.message,
    })
    }
}







export const ListProductDetail = (slug) => async (dispatch) => {
    try{
        dispatch({type : PRODUCT_DETAIL_REQUEST})
        const { data } = await axios.get(`/api/product/${slug}`);

        dispatch({
            type : PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch ({
        type : PRODUCT_DETAIL_FAIL,
        payload:error.response && error.response.data.detail ? error.response.data.detail : error.message,
    })
    }
}
