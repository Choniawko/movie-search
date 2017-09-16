import Header from './components/Header/'
import Search from './components/Search/'
import MovieList from './components/MovieList/'

const components = [
  { component: Header, name: 'movie-header' },
  { component: Search, name: 'movie-search' },
  { component: MovieList, name: 'movie-list' }
]

export default () => components.forEach((el) => window.customElements.define(el.name, el.component))
