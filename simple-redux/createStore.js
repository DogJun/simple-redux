export default function createStore (initStore) {
  let state = initStore
  let listeners = []
  function subscribe (listener) {
    listeners.push(listener)
  } 
  function changeState (newState) {
    state = newState
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
    changeState,
    subscribe
  }
}