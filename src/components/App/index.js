import * as styles from './AppStyle'

const App = () => (
  `
    <div class=${styles.containerStyle}>
      <movie-header></movie-header>
      <movie-search></movie-search>
    </div>
    <div id="list">
      <movie-list></movie-list>
    </div>   
  `
)
export default App
