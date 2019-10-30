const loggerMiddleware = (store) => (next) => (action) => {
  console.log('loggerMiddleware start')
  console.log('当前的state', store.getState())
  console.log('执行的action', action)
  // 增强原有的action
  next(action)
  console.log('更新后的state', store.getState())
  console.log('loggerMiddleware end')
} 

export default loggerMiddleware