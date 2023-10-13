// // Redux action type
// export const actionType = () => {
// const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
// const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
// }

// // action creator
// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_PRODUCTS_REQUEST });

//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const products = await response.json();

//       dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
//     } catch (error) {
//       dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
//     }
//   };
// };

// import { fetchProductsUsingFetch } from "../../Api/api";

// export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// export function fetchProducts() {
//   return async dispatch => {
//     try {
//       const products = await fetchProductsUsingFetch();
//       dispatch({
//         type: FETCH_PRODUCTS,
//         products,
//       });
//     } catch (error) {
//       console.log('error while fetchinh: ', error)
//       // Handle error
//     }
//   };
// }



export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error));
      });
  };
};