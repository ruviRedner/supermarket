import React from 'react'
import SearchInput from '../../components/SearchInput/SearchInput'
import CategoryList from '../../components/CategoryList/CategoryList'
import ProductList from '../../components/ProductList/ProductList'

export default function Home() {
  return (
    <div className='home-container'>
      <SearchInput />
      <CategoryList />
      <ProductList/>
    </div>
  )
}
