import { GET_ALL_LANGUAGE_ERROR, GET_ALL_LANGUAGE_LOADING, GET_ALL_LANGUAGE_SUCCESS, GET_E_DATA_ERROR, GET_E_DATA_LOADING, GET_E_DATA_SUCCESS, GET_SELECTED_LANGUAGE_ERROR, GET_SELECTED_LANGUAGE_LOADING, GET_SELECTED_LANGUAGE_SUCCESS, UPDATE_SELECTED_LANGUAGE_ERROR, UPDATE_SELECTED_LANGUAGE_LOADING, UPDATE_SELECTED_LANGUAGE_SUCCESS } from "./E_library.Types";



let initalState={
    loading: false,
    error: false,
    AllData:[],
    AllLanguages:[],
    SelectedLanguage:{}
}

export const E_LibraryReducer=(state = initalState, { type, payload })=>{
    switch(type){

        case GET_E_DATA_LOADING:
            return{
                ...state,
                loading:true
            };

        case GET_E_DATA_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }

        case GET_E_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                AllData: payload,
            }

            // for all languages
        case GET_ALL_LANGUAGE_LOADING:
            return{
                ...state,
                loading:true
            };

        case GET_ALL_LANGUAGE_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }

        case GET_ALL_LANGUAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                AllLanguages: payload,
            }

            // for GETTING SINGLE languages
        case GET_SELECTED_LANGUAGE_LOADING:
            return{
                ...state,
                loading:true
            };

        case GET_SELECTED_LANGUAGE_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }

        case GET_SELECTED_LANGUAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
                SelectedLanguage: payload,
            }

            // for UPDATING SINGLE languages
        case UPDATE_SELECTED_LANGUAGE_LOADING:
            return{
                ...state,
                loading:true
            };

        case UPDATE_SELECTED_LANGUAGE_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            }

        case UPDATE_SELECTED_LANGUAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: false,
            }

        
        default:
      return state;
  }
}