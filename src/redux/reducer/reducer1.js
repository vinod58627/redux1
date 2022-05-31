import { GET_POSTS } from './../Action/action1'

const initialState = {
  posts: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};