import App from './components/App'
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
