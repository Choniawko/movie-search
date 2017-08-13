import { API_KEY, globalUrl } from './utils'

export const authenticate = () => {
  return window.fetch(globalUrl(`/authentication/token/new?api_key=${API_KEY}`))
    .then(res => res.json())
}

export const getMovies = (term) => {
  return window.fetch(globalUrl(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
    ))
    .then(res => res.json())
}
