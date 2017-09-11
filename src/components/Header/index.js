const template = `<div>MovieDB search</div>`

class Header extends window.HTMLElement {
  createdCallback () {
    this.createShadowRoot().innerHTML = template
  }
}
export default Header
