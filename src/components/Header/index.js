class Header extends window.HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    const template = `<div>MovieDB search</div>`
    this.shadow.innerHTML = template
  }
}
export default Header
