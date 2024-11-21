import React from 'react'
import './CategoryCard.css'
interface Props {
  name: string
  image: string
}
export default function CategoryCard({ name, image }: Props) {
  return (
    <div className='category-card'>
      <img src={image} alt={name} className='image'/>
      <p>{name}</p>
    </div>
  )
}
