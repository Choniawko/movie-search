import { store } from '../../store'
import MovieItem from './MovieItem'

class Movielist extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.createShadowRoot()
  }
  connectedCallback () {
    const getMovieListTemplate = () => store.getState().map(el => MovieItem(el)).join('')
    store.subscribe(() => {
      document.querySelector('#list').innerHTML = getMovieListTemplate()
    })
    this.shadow.innerHTML = getMovieListTemplate()
  }
}
export default Movielist
