import React from 'react'
interface Props {
  name: string
  image: string
}
export default function CategoryCard({ name, image }: Props) {
  return (
    <div className='category-card-container'>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}
