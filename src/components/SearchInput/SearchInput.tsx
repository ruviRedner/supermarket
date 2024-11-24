import React, { useState } from 'react'
import './SearchInput.css'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchByName } from '../../redux/slices/productSlice'
export default function SearchInput() {
  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state) => state.products)
  const [name, setName] = useState<string>("")

  const hendelInSearchByName = async () => {  
    await dispatch(fetchByName(name))
    console.log(data);
    
    if(!data) return
  }
  return (
    <div className='search-container'>
      <input value={name} onChange={(e)=> {setName(e.target.value)}} type="text" placeholder='Search' />
      <div onClick={hendelInSearchByName}  className="search-icon">🔍</div>
    </div>
  )
}
