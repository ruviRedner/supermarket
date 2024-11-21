import React from 'react'
import './SearchInput.css'
export default function SearchInput() {
  return (
    <div className='search-container'>
      <input type="text" placeholder='Search' />
      <div className="search-icon">🔍</div>
    </div>
  )
}
