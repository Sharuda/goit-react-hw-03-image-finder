const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '34840339-667e92b06a5cc18aaab785dc8';

export const getImages = (searchText, page = 1) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(error => {
      console.log(error);
    });
};
