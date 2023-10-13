// // const url = 'https://fakestoreapi.com/products';

// // export const fetchProductsUsingFetch = () => {
// //   return fetch(URL)
// //     .then(res => res.json())
// //     .then(json => console.log(json))
// //     .catch(error => {
// //       console.error('Error fetching products using Fetch', error);
// //       throw error;
// //     });
// // };


// export const fetchData = () => {
//   return (dispatch) => {
//     dispatch(fetchDataRequest());
//     fetch('https://api.example.com/data')
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchDataSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchDataFailure(error));
//       });
//   };
// };