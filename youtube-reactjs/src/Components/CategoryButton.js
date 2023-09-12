import React from 'react'
import { useDispatch } from 'react-redux';
import { query_fill } from '../utils/searchBox_Slice';

const CategoryButton = ({name}) => {
  const dispatch=useDispatch();
  const handleCategoryButtonsClick=(name)=>{
    dispatch(query_fill(name));
  }

  return (
    <>
        {/* on click of any category button, we are dispatching an action to our redux store which is modifying our searchString from searchBoxSlice which then calls the API through useEffect in VideoContainer component of the clicked word */}
        <button onClick={()=>handleCategoryButtonsClick(name)} className='px-4 py-1 mx-3 hover:scale-110 bg-gray-200 rounded-md'>{name}</button>
    </>
  )
}

export default CategoryButton;