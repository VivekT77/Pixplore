import React, { useEffect, useState ,} from "react";
import {fetchCourseCategories} from "../services/operations/categoriesAPI"
import Category_Card from "../components/common/Category_Card";
import { FaCheckCircle } from "react-icons/fa";
import GrayBtn from "../components/common/GrayBtn";
import { useNavigate } from "react-router-dom";




const Explore = () => {
  const [postsCategories, setPostsCategories] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()

  const gotoHomeFeed=()=>{
    navigate("/")
  }


  useEffect(() => {

    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        // console.log("categories", categories)
        setPostsCategories(categories);
      }
      setLoading(false);
    };
    getCategories()

    console.log("postsCategories",postsCategories)
  },[]);

  return (

    <div className="flex justify-center items-center flex-col py-5 gap-4">
        <div>
          <h1 className="text-5xl my-12 font-semibold text-black">Explore by Category</h1>
        </div>

         <div className="flex flex-wrap justify-center my-4"> 
       {
        loading ? (<p>Loading...</p>) : (
          postsCategories.map((category,index)=>{
            return(
              <Category_Card category={category} key={index}/>

            )
          })
        )
       }
         </div>

         <div className="flex flex-col items-center justify-end gap-4"> 
            <FaCheckCircle className="text-2xl"/>
            <div className="flex flex-col items-center justify-center gap-1 mb-5">
              <p>Trendsetting Categories Await</p>
              <h2 className="text-xl font-semibold">Be the first to explore the latest and greatest</h2>
            </div>
            <GrayBtn text="Go to home feed" btnHandler={gotoHomeFeed}/>
         </div>
    </div>
   
  )

};

export default Explore;
