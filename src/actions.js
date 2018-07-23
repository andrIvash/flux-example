// actions
export const ADD_TODO = 'ADD_TODO'

// action creators
export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
})
