import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { categories } from "../apis";

const {
    SHOW_ALL_CATEGORIES_API,
} = categories;



// / fetching the all posts categories
export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", SHOW_ALL_CATEGORIES_API);
    console.log("COURSE_CATEGORIES_API API RESPONSE............", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
  }
  return result;
};