import React from 'react'

const CategoryButton = ({name}) => {
  return (
    <>
        <button className='px-4 py-1 mx-3 hover:scale-110 bg-gray-200 rounded-md'>{name}</button>
    </>
  )
}

export default CategoryButton;