import axios from "axios";
import { ALL_USER_GET_ERROR, ALL_USER_GET_LOADING, ALL_USER_GET_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./Auth.Types";


export const loginFunction=(data,navigate)=>async(dispatch)=>{
    const {email,password}=data
    let token=`${email}:${password}`
    dispatch({type:AUTH_LOGIN_LOADING})
    try {
            alert("Login Success")
            dispatch({type:AUTH_LOGIN_SUCCESS,payload:token})
            navigate('/home')
    } catch (error) {
        dispatch({type:AUTH_LOGIN_ERROR})
       alert("Something Went Wrong")
    }
}

export const signupPost=(data,navigate)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGNUP_LOADING})
    try {
        let response=await axios.post("http://localhost:8080/signup",data)
        dispatch({type:AUTH_SIGNUP_SUCCESS,payload:response.data})
        alert("Your Account Created Successfully")
        navigate('/login')
        console.log(response.data,'signup Post data')
        return response.data
    } catch (error) {
        dispatch({type:AUTH_SIGNUP_ERROR})
    }
}


export const getAllUserData=()=>async(dispatch)=>{
    dispatch({type:ALL_USER_GET_LOADING})
    try {
         let response=await axios.get("http://localhost:8080/signup")
        dispatch({type:ALL_USER_GET_SUCCESS,payload:response.data})
        console.log(response.data,'alluserData')
        return response.data
    } catch (error) {
        dispatch({type:ALL_USER_GET_ERROR})
    }
}

export const logoutFunction=()=>({type:AUTH_LOGOUT})