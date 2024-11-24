import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryEnum } from '../../types/enum/categoryEnum';
interface Props {
  product:{
    _id: string;
    name: string;
    image?: string;
  category: categoryEnum;
  price: number;
  quantity: number;
  prevPrice?: Number;
  description: string;
}
}
export default function ProductCard(prop: Props) {
  const { _id, name , image, category, price, quantity, prevPrice, description } = prop.product

    const navigate = useNavigate()
    return (
      <div className='product-card'>
        <img src={image} alt={name} className='image'/>
        <div className="product-details">
        <p>{name}</p>
        <p>${price}</p>
          </div>
        <div className="product-bar">
          <button>Add to cart</button>
      
        </div>
      </div>
    )
}
