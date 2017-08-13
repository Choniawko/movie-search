import { store } from '../../store'
import * as actions from '../../actions'
import * as styles from './SearchStyle'

const template = `
  <div><input class=${styles.inputStyle} id="search" placeholder="search..." /></div>
    `
export default () => {
  class Search extends window.HTMLElement {
    createdCallback () {
      this.createShadowRoot().innerHTML = template
      this.$search = this.shadowRoot.querySelector('#search')
      this.$search.addEventListener('input', () => {
        store.dispatch(actions.getData(this.$search.value))
      })
    }
  }
  document.registerElement('search-input', Search)
}
