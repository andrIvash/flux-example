import { ADD_TODO } from './actions';

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [].concat(state, action.payload)
    default:
      return state
  }
}
export default reducer;