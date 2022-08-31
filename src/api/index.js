import API from "./axios";

//Strat Posts APIs
export const fetchAllPosts = () => API.get(`/posts`);
//End Posts APIs

// // Start Our team APIs
// export const fetchOurTeam = () => API.get("/ContentApi/GetOurTeams");
// // End Our team APIs

// // Start Locations APIs
// export const fetchLocations = () => API.get("/ContentApi/GetLocations");
// // End Locations APIs

// // Start Product APIs

// export const fetchProductsList = (data) =>
//   API.post("/Product/GetProducts", data);

// export const fetchProductCategories = (data) =>
//   API.post("/Product/GetProductCategories", data);

// export const fetchProductDetails = (data) =>
//   API.post("/Product/GetProductDetails", data);

// export const fetchProductCategoriesList = (data) =>
//   API.post("/Product/GetProductCategories", data);

// export const fetchProductCategoryDetails = (data) =>
//   API.post("/Product/GetProductCategoryDetails", data);

// // End Product APIs
