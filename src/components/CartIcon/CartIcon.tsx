import React from 'react'
import './CartIcon.css'
import { RootState, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'

export default function CartIcon() {
  const navigate = useNavigate()
  const cardData = useAppSelector((state: RootState) => state.cart.data)
  return (
    <div className='cart-icon' onClick={() => navigate('/my-cart')}>
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart-icon" />
      <p>{cardData?.receipt? cardData.receipt.length:0} - products</p>
      <p>{cardData?.totalPrice &&`${cardData?.totalPrice} $`}</p>
      <p>{!cardData?.totalPrice &&`0 $`}</p>
    </div>
  )
}
