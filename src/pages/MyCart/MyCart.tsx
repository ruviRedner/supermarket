import React from 'react'
import { Root } from 'react-dom/client'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function MyCart() {
  const cardData = useSelector((state: RootState) => state.cart.data)
  const products = useSelector((state: RootState) => state.cart.data!.receipt)
  return (
    <div className='my-cart'>
      <h2>My Cart</h2>
      <div className="cart-container">
        {products.length > 0 ? products.map((product, index) => (
          <div className="cart-card" key={index}>
            <div className="cart-details">
              <h3>{product.idproduct}</h3>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
            </div>
          </div>
      )): <p>Cart is empty</p>}
      </div>
    </div>
  )
}
