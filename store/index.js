import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const exampleInitialState = {
  count: 0
}

export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.REMOVE:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default: return state
  }
}


export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const removeCount = () => dispatch => {
    return dispatch({ type: actionTypes.REMOVE })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools())
}