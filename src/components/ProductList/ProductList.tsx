import React, { useEffect } from 'react'
import CategoryList from '../CategoryList/CategoryList'
import SearchInput from '../SearchInput/SearchInput'
import { IProduct } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchAllProducts } from '../../redux/slices/productSlice'

export default function ProductList() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const productsList = useAppSelector((state) => state.products.data)
useEffect(() => {
  dispatch(fetchAllProducts())
}, [])
  return (
    <div className='product-list-container'>
      <div className="product-list">
        {productsList && productsList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}
