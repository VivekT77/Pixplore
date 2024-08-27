import React, { useEffect, useState } from "react";
import {fetchCourseCategories} from "../services/operations/categoriesAPI"
import Category_Card from "../components/common/Category_Card";


const Explore = () => {
  const [postsCategories, setPostsCategories] = useState([]);
  const [loading, setLoading] = useState(false)


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

    <div className="flex justify-center items-center flex-col">
        <div>
          <h1 className="text-5xl my-8 font-semibold text-black">Explore by Category</h1>
        </div>

         <div className="flex flex-wrap justify-center"> 
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
    </div>
   
  )

};

export default Explore;
