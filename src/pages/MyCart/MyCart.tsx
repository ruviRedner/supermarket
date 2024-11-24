import React, { useEffect } from 'react'
import { Root } from 'react-dom/client'
import { useSelector } from 'react-redux'
import './MyCart.css'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { checkout, fetchCart } from '../../redux/slices/cartSlice'
import { ICart } from '../../types/cart'

export default function MyCart() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user_id = useAppSelector((state: RootState) => state.user.user?._id)
  const cardData = useSelector((state: RootState) => state.cart.data)
useEffect(() => {
  dispatch(fetchCart(user_id as string))
})
  return (
    <div className='my-cart'>
      <h2>My Cart</h2>
      <div className="cart-container">
        {cardData?.receipt ? cardData.receipt.map((product, index) => (
          <div className="cart-card" key={index}>
            <div className="cart-details">
              <h3>{product.idproduct}</h3>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
              <p>${product.price * product.quantity}</p>
            </div>
          </div>
      )): <p>Cart is empty</p>}
      </div>
      <div className="cart-total">
        <h3>Total:</h3>
        <p>${cardData?.totalPrice}</p>
        <button onClick={() => navigate('/checkout')}>to Pay & Confirm</button>
      </div>

    </div>
  )
}
