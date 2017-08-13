import { posterBasePath } from '../../common/utils'
import * as styles from './MovieListStyle'

export default (item) => `
  <div class=${styles.movieBlock}>
    <div class=${styles.movieProp}><img src=${item.poster_path ? posterBasePath : ''}/${item.poster_path || ''} /></div>
    <div class=${styles.movieProp}>
      <p>${item.title}</p>
      <p class=${styles.dataStyle}>${item.release_date}</p>
    </div>
  </div>`
