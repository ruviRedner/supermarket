import React from 'react'
import { categoryEnum } from '../../types/enum/categoryEnum'
import CategoryCard from '../CategoryCard/CategoryCard'
import './CategoryList.css'
import  supermarketCategories from '../../data/categoryes.json'
export default function CategoryList() {
  
    return (
    <div className='category-container'>
      {supermarketCategories.map((category, index) => (
        <CategoryCard key={index} name={category.name} image={category.image} />
      ))}
    </div>
  )
}
