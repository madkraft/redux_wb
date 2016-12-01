function postComment (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return new state with new coment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function comments (state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state, 
      // overwrite this post with new one
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  
  return state
}

export default comments
