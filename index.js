import {createStore} from './simple-redux/index.js'
import reducer from './reducer.js'
let initState = {
  count: 0,
  name: '',
}

let store = createStore(reducer, initState)

// 订阅
store.subscribe(() => {
  let state = store.getState()
  console.log(state.count)
})
// dispatch 通过派发任务 执行更新
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'DECRMENT'
})