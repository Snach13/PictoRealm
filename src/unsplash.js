const BASE_URL = `https://api.unsplash.com`;
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
// console.log(API_KEY);
const COUNT = 30;

export function getRandomImages() {
  const URL = `${BASE_URL}/photos/random/?client_id=${API_KEY}&count=${COUNT}`;
  return fetch(URL);
}

export function searchImages(searchTerm) {
  const URL = `${BASE_URL}/search/photos/?client_id=${API_KEY}&per_page=${COUNT}&query=${searchTerm}`;
  return fetch(URL);
}
