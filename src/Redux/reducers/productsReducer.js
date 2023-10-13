// import { actionType } from "../actions/productsAction";


// const initialState = {
//     products: [],
//     loading: false,
//     error: null,
//   };
  
// const productsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case actionType.FETCH_PRODUCTS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case actionType.FETCH_PRODUCTS_SUCCESS:
//         return {
//           ...state,
//           products: action.payload,
//           loading: false,
//         };
//       case actionType.FETCH_PRODUCTS_ERROR:
//         return {
//           ...state,
//           error: action.payload,
//           loading: false,
//         };
//       default:
//         return state;
//     }
//   };



// import { FETCH_PRODUCTS } from '../actions/productsAction';
// const initialState = {
//   products: [],
// };

// function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_PRODUCTS:
//       return {
//         ...state,
//         products: action.products,
//       };
//     default:
//       return state;
//   }
// }

//   export default productsReducer;


// reducers.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/productsAction';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;


