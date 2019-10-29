export default function createStore (reducer, initStore) {
  let state = initStore
  let listeners = []
  function subscribe (listener) {
    listeners.push(listener)
  } 
  function dispatch (action) {
    // 按照reducer规则来执行
    state = reducer(state, action)
    // 通知
    for (let item of listeners) {
      item()
    }
  }
  function getState () {
    return state
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}