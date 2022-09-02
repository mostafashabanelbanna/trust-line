import * as types from "../constants/actionTypes";

const intialState = {
  allPosts: [],
  post: {},
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return { ...state, allPosts: action.allPosts };
    case types.GET_POST:
      return { ...state, post: action.post };
    case types.EDIT_POST:
      return { ...state, post: action.post };
    case types.DELETE_POST:
      return { ...state, post: action.post };
    default:
      return state;
  }
};
