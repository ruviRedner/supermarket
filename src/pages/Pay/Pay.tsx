import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'

export default function Pay() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cartData = useAppSelector((state: RootState) => state.cart.data)
  return (
    <div className='pay-container'>
      <h1>Pay</h1>
      <input type="text" placeholder='Card Number'/>
      <input type="text" placeholder='CVV'/>
      <input type="text" placeholder='Expiration Date'/>
      <p>Total: {cartData?.totalPrice}</p>
      <button>Pay</button>
    </div>
  )
}
