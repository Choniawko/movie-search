import Header from './components/Header/'
import Search from './components/Search/'
import MovieList from './components/MovieList/'
const MOVIE_HEADER = 'movie-header'
const MOVIE_SEARCH = 'movie-search'
const MOVIE_LIST = 'movie-list'

export default () => ([
    {component: Header, name: MOVIE_HEADER},
    {component: Search, name: MOVIE_SEARCH},
    {component: MovieList, name: MOVIE_LIST}
].forEach((el) => document.registerElement(el.name, el.component)))
