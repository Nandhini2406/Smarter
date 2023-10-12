const url = 'https://fakestoreapi.com/products';

export const fetchProductsUsingFetch = () => {
  return fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => {
      console.error('Error fetching products using Fetch', error);
      throw error;
    });
};
