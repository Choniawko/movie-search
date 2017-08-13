import App from './components/App'
import { store } from './store'
const rootEl = document.getElementById('root')
const render = () => {
  rootEl.innerHTML = App()
}
render()
store.subscribe(() => {
  document.querySelector('#list').innerHTML = ''
})
