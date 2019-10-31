const applyMiddleware = (...middlewares) => {
  return function (oldCreateStore) {
    return function newCreateStore (reducer, initState) {
       // 生成新的store
      const store = oldCreateStore(reducer, initState)
      let dispatch = store.dispatch
      // 给每个中间件传入store
      const chain = middlewares.map(middleware => middleware(store))
      console.log(chain)
      chain.reverse().map(middleware => {
        dispatch = middleware(dispatch)
      })
      // middleware 是对 dispatch 的增强！！！
      store.dispatch = dispatch
      return store
    }
  }
}

export default applyMiddleware