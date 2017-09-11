import { store } from '../../store'
import * as actions from '../../actions'
import * as styles from './SearchStyle'

class Search extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.createShadowRoot()
  }
  connectedCallback () {
    const template = `
      <div><input class=${styles.inputStyle} id="search" placeholder="search..." /></div>
    `
    this.shadow.innerHTML = template
    this.$search = this.shadow.querySelector('#search')
    this.$search.addEventListener('input', () => {
      store.dispatch(actions.getData(this.$search.value))
    })
  }
}
export default Search
