import * as types from "../constants/actionTypes";

const intialState = {
  allPosts: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return { ...state, allPosts: action.allPosts };

    default:
      return state;
  }
};
