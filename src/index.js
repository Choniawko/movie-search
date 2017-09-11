import App from './components/App'
import { store } from './store'
import { movieListTemplate } from './components/MovieList'
import { authenticate } from './common/APIService'
import registerComponents from './registerComponents'

const rootEl = document.getElementById('root')

authenticate()
  .then(res => window.sessionStorage.setItem('token', res.request_token))

registerComponents()

const render = () => {
  rootEl.innerHTML = App()
}
render()

store.subscribe(() => {
  document.querySelector('#list').innerHTML = movieListTemplate()
})
