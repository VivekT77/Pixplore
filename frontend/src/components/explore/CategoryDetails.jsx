import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCategoryDetails } from '../../services/operations/categoriesAPI';

const CategoryDetails = () => {

    const {categoryId}=useParams();
    const [response, setResponse] = useState(null)

    useEffect(() => {
        ;(async () => {
          try {
            const res = await fetchCategoryDetails(categoryId)
            console.log("course details res: ", res)
            if (res.success) {
              setResponse(res)
            } else {
              console.log("Error in response:", res.message)
              setResponse({ success: false }) // This will trigger the Error component
            }
          } catch (error) {
            console.log("Could not fetch Course Details", error)
            setResponse({ success: false }) // This will trigger the Error component
          }
        })()
      }, [categoryId])

    console.log("response",response)


  return (
   <div>
        <div>
            {response.title}
        </div>
   </div>
  )
}

export default CategoryDetails