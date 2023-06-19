const API_KEY = 'a569583d146665f5491dc4c902f2ad7c';
const BASE_PATH = 'https://api.themoviedb.org/3';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
