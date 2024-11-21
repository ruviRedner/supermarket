import React from 'react'
import './CategoryCard.css'
import { useNavigate } from 'react-router-dom'
interface Props {
  name: string
  image: string
}
export default function CategoryCard({ name, image }: Props) {
  const navigate = useNavigate()
  return (
    <div className='category-card'
    onClick={() => navigate(`/category/${name}`)}
    >
      <img src={image} alt={name} className='image'/>
      <p>{name}</p>
    </div>
  )
}
