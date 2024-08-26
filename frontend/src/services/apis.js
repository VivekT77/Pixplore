const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails"
}


// COURSE ENDPOINTS
export const PostEndpoints = {
  GET_ALL_POST_API: BASE_URL + "/post/getAllPosts",
  POST_DETAILS_API: BASE_URL + "/post/getPostDetails",
  EDIT_POST_API: BASE_URL + "/post/editPost",
  // POST_CATEGORIES_API: BASE_URL + "/post/showAllCategories",
  CREATE_POST_API: BASE_URL + "/post/createPost",
  GET_ALL_CREATOR_POST_API: BASE_URL + "/post/getCreatorPosts",
  DELETE_POST_API: BASE_URL + "/post/deletePost",
  GET_FULL_POST_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullPostDetails",

}


// CATAGORIES API
export const categories = {
  SHOW_ALL_CATEGORIES_API: BASE_URL + "/post/showAllCategories",
}


// CONTACT-US API
// export const contactusEndpoint = {
//   CONTACT_US_API: BASE_URL + "/reach/contact",
// }

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}