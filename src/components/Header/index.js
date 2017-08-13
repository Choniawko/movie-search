const template = `<div>MovieDB search</div>`

export default () => {
  class Header extends window.HTMLElement {
    createdCallback () {
      this.createShadowRoot().innerHTML = template
    }
  }
  document.registerElement('search-header', Header)
}
