import { store } from '../../store'
import MovieItem from './MovieItem'

const getMovieListTemplate = () =>
  store.getState()
    .map(el => MovieItem(el))
    .join('')

class Movielist extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    store.subscribe(() => {
      document.querySelector('#list').innerHTML = getMovieListTemplate()
    })
  }
  connectedCallback () {
    this.shadow.innerHTML = getMovieListTemplate()
  }
}
export default Movielist
