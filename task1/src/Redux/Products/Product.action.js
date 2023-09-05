import axios from "axios";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS, DEBOUNCING_GET_PRODUCT_ERROR, DEBOUNCING_GET_PRODUCT_LOADING, DEBOUNCING_GET_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCT_LENGTH_SUCCESS, GET_ALL_PRODUCT_LENGTH__ERROR, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_LOADING, GET_SINGLE_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_SUCCESS } from "./Product.Types";

export const addProduct=(data,navigate)=>async(dispatch)=>{
    dispatch({type:ADD_PRODUCT_LOADING})
    try {
        let response=await axios.post("http://localhost:8080/products",data)
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:response.data})
        // alert('Data add to products')
        // console.log('product ADDED',response.data)
        navigate('/home')
        return response.data
    } catch (error) {
        console.log(error.response)
        dispatch({type:ADD_PRODUCT_ERROR})
    }
}

export const getAllProductlength=()=>async(dispatch)=>{
    try {
        let response=await axios.get(`http://localhost:8080/products`)
        dispatch({type:GET_ALL_PRODUCT_LENGTH_SUCCESS,payload:response.data})
        // console.log(response.data)
    } catch (error) {
        dispatch({type:GET_ALL_PRODUCT_LENGTH__ERROR})
    }
}

export const getProduct=(page=1,limit=4,search="",sortBy="price",order="asc")=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
    try {
        let response=await axios.get(`http://localhost:8080/products?q=${search}&_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${order}`)
        // let proResponse=await axios.get(`http://localhost:8080/products`)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:response.data})
        // console.log('GETING ALL PRODUCT',response.data)
        return response.data
    } catch (error) {
        console.log(error.response)
        dispatch({type:GET_PRODUCT_ERROR})
    }
}

export const deleteProduct=(id,page, limit, search,sortBy,order)=>async(dispatch)=>{
    dispatch({type:DELETE_PRODUCT_LOADING})
    try {
        let response=await axios.delete(`http://localhost:8080/products/${id}`)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:response.data})
        dispatch(getProduct(page, limit, search,sortBy,order))
        // dispatch({type:DELETE_PRODUCT_SUCCESS,payload:{ id: id }})
        // alert('product deleted')
        // console.log('product deleted',response.data)
        return response.data
    } catch (error) {
        console.log(error.response)
        dispatch({type:DELETE_PRODUCT_ERROR})
    }
}

export const updateProduct=(id,data)=>async(dispatch)=>{
    dispatch({type:UPDATE_PRODUCT_LOADING})
    try {
        let response=await axios.patch(`http://localhost:8080/products/${id}`,data)
        dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:response.data})
        // alert('product UPDATED')
        // console.log('product UPDATED',response.data)
        return response.data
    } catch (error) {
        console.log(error.response)
        dispatch({type:UPDATE_PRODUCT_ERROR})
    }
}

export const getSingleProduct=(id)=>async(dispatch)=>{
    dispatch({type:GET_SINGLE_PRODUCT_LOADING})
    try {
        let response=await axios.get(`http://localhost:8080/products/${id}`)
        console.log("SINGLE PRODUCT",response.data)
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:response.data})
        return response.data
    } catch (error) {
        console.log(error.response)
        dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
}



// Debouncing
export const debouncingGetProduct=(search="")=>async(dispatch)=>{
    dispatch({type:DEBOUNCING_GET_PRODUCT_LOADING})
    try {
        let response=await axios.get(`http://localhost:8080/products?q=${search}`)
        console.log("Debouncing PRODUCT",response.data)
        dispatch({type:DEBOUNCING_GET_PRODUCT_SUCCESS,payload:response.data})
        return response.data
    } catch (error) {
        dispatch({type:DEBOUNCING_GET_PRODUCT_ERROR})
    }
}