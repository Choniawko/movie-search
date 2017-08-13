import App from './components/App'
import { store } from './store'
import { movieListTemplate } from './components/MovieList'
import { authenticate } from './common/APIService'
const rootEl = document.getElementById('root')

authenticate()
.then(res => window.sessionStorage.setItem('token', res.request_token))

const render = () => {
  rootEl.innerHTML = App()
}
render()

store.subscribe(() => {
  document.querySelector('#list').innerHTML = movieListTemplate()
})
