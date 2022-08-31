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
