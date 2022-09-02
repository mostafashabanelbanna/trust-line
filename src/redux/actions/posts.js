import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPosts();
    dispatch({ type: types.GET_ALL_POSTS, allPosts: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch, getState) => {
  const allPosts = getState().posts.allPosts;
  // if clicked on post from the posts list
  if (allPosts.length) {
    const currentPost = allPosts.find((post) => post.id === +id);
    dispatch({ type: types.GET_POST, post: currentPost });
  } else {
    //if you come to the link dirctly or on refresh
    try {
      const { data } = await api.fetchPost(id);
      dispatch({ type: types.GET_POST, post: data });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const resetPost = () => (dispatch) => {
  dispatch({ type: types.GET_POST, post: {} });
};

export const addPost = (post) => (dispatch, getState) => {
  try {
    //copy the original array
    const allPosts = [...getState().posts.allPosts, post];
    // Set allPosts in store after add new post
    dispatch({ type: types.GET_ALL_POSTS, allPosts });
    // dispatch(getAllPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const editPost = (post) => async (dispatch, getState) => {
  try {
    const { data } = await api.updatePost(post);
    dispatch({ type: types.EDIT_POST, post: data });
    //copy the original array
    const allPosts = [...getState().posts.allPosts];
    // find the indext of current arr
    const postIndex = allPosts.findIndex((i) => i.id === post.id);
    // update the currrent post
    allPosts[postIndex] = post;
    // Set allPosts in store after update the current post
    dispatch({ type: types.GET_ALL_POSTS, allPosts });
    // dispatch(getAllPosts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id, navigate) => async (dispatch, getState) => {
  try {
    const { data } = await api.removePost(id);
    console.log(data);
    dispatch({
      type: types.DELETE_POST,
      post: {},
    });
    //copy the original array
    const allPosts = [...getState().posts.allPosts];
    // remove current post from the array
    allPosts.splice(
      allPosts.findIndex((i) => i.id === id),
      1
    );
    // Set allPosts in store after delete the current post
    dispatch({ type: types.GET_ALL_POSTS, allPosts });
    //navigate to the list page
    navigate("/posts");
    // dispatch(getAllPosts());
  } catch (error) {
    console.log(error.message);
  }
};
