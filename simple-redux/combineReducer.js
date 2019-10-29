export default function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)
  return function combination (state = {}, action) {
    const nextState = {}
    for (let key of reducerKeys) {
      const reducer = reducers[key]
      const previousStateOfKey = state[key]
      const nextStateOfKey = reducer(previousStateOfKey, action)
      nextState[key] = nextStateOfKey
    }
    return nextState
  }
}