import * as consts from './consts'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.SET_LIST:
      return [ ...action.payload ]
    default:
      return state
  }
}
