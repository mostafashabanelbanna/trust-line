import API from "./axios";

//Strat Posts APIs
export const fetchAllPosts = () => API.get(`/posts`);
export const fetchPost = (id) => API.get(`posts/${id}`);
export const updatePost = (data) => API.put(`posts/${data.id}`, data);
export const removePost = (id) => API.delete(`posts/${id}`);
//End Posts APIs
