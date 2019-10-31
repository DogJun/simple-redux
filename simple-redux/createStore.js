export default function createStore (reducer, initState, rewriteCreateStoreFunc) {
  if (rewriteCreateStoreFunc) {
    const newCreateStoreFunc = rewriteCreateStoreFunc(createStore)
    return newCreateStoreFunc(reducer, initState)
  }
  let state = initState
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
  dispatch({
    type: Symbol()
  })
  return {
    getState,
    dispatch,
    subscribe
  }
}