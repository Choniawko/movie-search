/* global describe it expect */
import * as actions from './'

describe('actions', () => {
  it('should create an action to add  movies array', () => {
    const movies = [
      {
        title: 'title', id: 53459, posterBasePath: 'posterBasePath', release_date: 'release_date'
      },
      {
        title: 'title #2', id: 53455, posterBasePath: 'posterBasePath', release_date: 'release_date'
      }
    ]
    const expectedAction = {
      type: 'SET_LIST',
      payload: movies
    }
    expect(actions.setList(movies)).toEqual(expectedAction)
  })
})
