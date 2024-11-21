import React from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import CategoryList from '../../components/CategoryList/CategoryList'

export default function Home() {
  return (
    <div className='home-container'>
      <SearchInput />
      <CategoryList />
    </div>
  )
}
