import React from 'react'

const Category_Card = ({category}) => {
  return (
    <div className='w-[400px] h-[300px] bg-cover bg-center bg-no-repeat flex justify-center items-end pb-4 opacity-0.3'  
    style={{ backgroundImage: `url(${category.thumbnail})` }}>
        <div className='text-white flex flex-col items-center justify-center'>
            <p>{category.description}</p>
            <h2>{category.title}</h2>
        </div>
    </div>
  )
}

export default Category_Card