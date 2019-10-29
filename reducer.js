export default function reducer (state, action) {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECRMENT': 
      return {
        ...state,
        count: state.count - 1,
      }
    default: 
      return state
  }
}