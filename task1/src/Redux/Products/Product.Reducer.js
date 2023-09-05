import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  DEBOUNCING_GET_PRODUCT_ERROR,
  DEBOUNCING_GET_PRODUCT_LOADING,
  DEBOUNCING_GET_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_LENGTH_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_LOADING,
  UPDATE_PRODUCT_SUCCESS,
} from "./Product.Types";

let initalState = {
  loading: false,
  error: false,
  AllProductData: [],
  singleProductData: {},
  AllProductsLength:[],
  AllDebounceProducts:[]
};

export const ProductReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    // Getting all the Product here
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        AllProductData: payload,
      };

    //   Adding product here
    case ADD_PRODUCT_LOADING:
        return{
            ...state,
            loading: true,
        }
    
    case ADD_PRODUCT_ERROR:
        return{
            ...state,
            error: true,
            loading: false,
        }

    case ADD_PRODUCT_SUCCESS:
        return{
            ...state,
            loading: false,
            error:false,
            // AllProductData:[...state.AllProductData,payload]
        }


    // Deleteing Product Here
    case DELETE_PRODUCT_LOADING:
        return{
            ...state,
            loading: true,
        }
    
    case DELETE_PRODUCT_ERROR:
        return{
            ...state,
            error: true,
            loading: false,
        }

    case DELETE_PRODUCT_SUCCESS:
        // const newItems = state.AllProductData.filter((e) => e.id !== payload.id);
        return{
            ...state,
            loading: false,
            error:false,
            // AllProductData:newItems
        }

    // Updateing Product Here
    case UPDATE_PRODUCT_LOADING:
        return{
            ...state,
            loading: true,
        }
    
    case UPDATE_PRODUCT_ERROR:
        return{
            ...state,
            error: true,
            loading: false,
        }

    case UPDATE_PRODUCT_SUCCESS:
        return{
            ...state,
            loading: false,
            error:false
        }


    // Get Single Product Here
    case GET_SINGLE_PRODUCT_LOADING:
        return{
            ...state,
            loading: true,
        }
    
    case GET_SINGLE_PRODUCT_ERROR:
        return{
            ...state,
            error: true,
            loading: false,
        }

    case GET_SINGLE_PRODUCT_SUCCESS:
        return{
            ...state,
            loading: false,
            error:false,
            singleProductData:payload
        }
        

    //Get Debouncing Product Here
    case DEBOUNCING_GET_PRODUCT_LOADING : 
        return{
            ...state,
            loading:true
        }

    case DEBOUNCING_GET_PRODUCT_ERROR:
        return{
            ...state,
            error: true,
            loading: false,
        }

    case DEBOUNCING_GET_PRODUCT_SUCCESS:
        return{
            ...state,
            loading: false,
            error:false,
            AllDebounceProducts:payload
        }

    case GET_ALL_PRODUCT_LENGTH_SUCCESS:{
        return{
            ...state,
            AllProductsLength:payload
        }
    }

    default:
      return state;
  }
};
