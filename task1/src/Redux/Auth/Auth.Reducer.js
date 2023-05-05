import { ALL_USER_GET_ERROR, ALL_USER_GET_LOADING, ALL_USER_GET_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./Auth.Types";

let initalState = {
    loading: false,
    error: false,
    AllUserData:[],
    token:''
  };
  

  export const AuthReducer=(state=initalState,{ type, payload })=>{
switch (type) {
  // SignUP Reducer
    case AUTH_SIGNUP_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case AUTH_SIGNUP_ERROR: {
        return {
          ...state,
          error: true,
          loading: false,
        };
      }

      case AUTH_SIGNUP_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
        };
      }

      // Login Reducer
      case AUTH_LOGIN_LOADING:{
        return{
          ...state,
          loading:true,
        }
      }

      case AUTH_LOGIN_ERROR:{
        return{
          ...state,
          error:true,
          loading:false
        }
      }

      case AUTH_LOGIN_SUCCESS:{
        return{
          ...state,
          error:false,
          loading:false,
          token:payload
        }
      }

      // Getting All User Reducer
      case ALL_USER_GET_LOADING:{
        return{
          ...state,
          loading:true,
        }
      }
      case ALL_USER_GET_ERROR:{
        return{
          ...state,
          error:true,
        }
      }
      case ALL_USER_GET_SUCCESS:{
        return{
          ...state,
          loading:false,
          error:false,
          AllUserData:payload
        }
      }

      // Logout
      case AUTH_LOGOUT: {
        return {
          ...state,
          token: "",
        };
      }

default:return state
}
}