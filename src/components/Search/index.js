import { store } from '../../store'
import * as actions from '../../actions'
import * as styles from './SearchStyle'

const template = `
<div><input class=${styles.inputStyle} id="search" placeholder="search..." /></div>
`

class Search extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }
  connectedCallback () {
    this.shadow.innerHTML = template
    this.$search = this.shadow.querySelector('#search')
    this.$search.addEventListener('input', () => {
      store.dispatch(actions.getData(this.$search.value))
    })
  }
}
export default Search
