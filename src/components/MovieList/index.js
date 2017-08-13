import { store } from '../../store'
import MovieItem from './MovieItem'

export const movieListTemplate = () => store.getState().map(el => MovieItem(el)).join('')

export default () => {
  class Movielist extends window.HTMLElement {
    createdCallback () {
      this.createShadowRoot().innerHTML = movieListTemplate()
    }
  }
  document.registerElement('movie-list', Movielist)
}
