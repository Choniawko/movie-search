import { getMovies } from '../common/APIService'

export const setList = (movies) => ({
  type: 'SET_LIST',
  payload: movies
})

export const getData = (term) => {
  return (dispatch) => {
    return term
      ? getMovies(term)
          .then((res) => {
            dispatch(setList(res.results))
          })
      : null
  }
}
