import axios from "axios";
import { GET_ALL_LANGUAGE_ERROR, GET_ALL_LANGUAGE_LOADING, GET_ALL_LANGUAGE_SUCCESS, GET_E_DATA_ERROR, GET_E_DATA_LOADING, GET_E_DATA_SUCCESS, GET_SELECTED_LANGUAGE_ERROR, GET_SELECTED_LANGUAGE_LOADING, GET_SELECTED_LANGUAGE_SUCCESS, UPDATE_SELECTED_LANGUAGE_ERROR, UPDATE_SELECTED_LANGUAGE_LOADING, UPDATE_SELECTED_LANGUAGE_SUCCESS } from "./E_library.Types";



export const getE_data=()=>async(dispatch)=>{
    dispatch({type:GET_E_DATA_LOADING})
    try {
        let response = await axios.get('http://localhost:8080/contentCategoryWiseConnectors')
        dispatch({type:GET_E_DATA_SUCCESS,payload:response.data})
        return response.data
    } catch (error) {
        dispatch({type:GET_E_DATA_ERROR})
    }
}
export const getAllLanguagesApi=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_LANGUAGE_LOADING})
    try {
        let response = await axios.get('http://localhost:8080/allLanguages')
        dispatch({type:GET_ALL_LANGUAGE_SUCCESS,payload:response.data})
        // console.log("respone",response)
        return response.data
    } catch (error) {
        dispatch({type:GET_ALL_LANGUAGE_ERROR})
    }
}

export const getSelectedLanguageApi=()=>async(dispatch)=>{
    dispatch({type:GET_SELECTED_LANGUAGE_LOADING})
    try {
        let response = await axios.get('http://localhost:8080/selectedLanguage')
        dispatch({type:GET_SELECTED_LANGUAGE_SUCCESS,payload:response.data})
        console.log("selected lang:- ",response.data)
        return response.data
    } catch (error) {
        dispatch({type:GET_SELECTED_LANGUAGE_ERROR})
    }
}

export const updateSelectedLanguageApi=(data)=>async(dispatch)=>{
    dispatch({type:UPDATE_SELECTED_LANGUAGE_LOADING})
    try {
        let response = await axios.patch('http://localhost:8080/selectedLanguage',data)
        dispatch({type:UPDATE_SELECTED_LANGUAGE_SUCCESS,payload:response.data})
        // dispatch(getSelectedLanguageApi())
        return response.data
    } catch (error) {
        dispatch({type:UPDATE_SELECTED_LANGUAGE_ERROR})
    }
}

