import registerComponents from '../../registerComponents'
import * as styles from './AppStyle'

registerComponents()

const App = () => {
  return `
  <div class=${styles.containerStyle}>
    <search-header></search-header>
    <search-input></search-input>
  </div>
  <div id="list">
    <movie-list></movie-list>
  </div>   
  `
}
export default App
