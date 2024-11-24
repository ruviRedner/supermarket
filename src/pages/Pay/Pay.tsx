import React from 'react'
import './Pay.css'
import { useNavigate } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { ICart } from '../../types/cart'
import { checkout } from '../../redux/slices/cartSlice'

export default function Pay() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cartData = useAppSelector((state: RootState) => state.cart.data)
    const user_id = useAppSelector((state: RootState) => state.user.user?._id)

    const payment = async() => {
      
      const newCart = {...cartData, user_id}
      await dispatch(checkout(newCart as ICart))
      navigate('/')
    }
  return (
    <div className='pay-container'>
      <h1>Pay</h1>
      <input type="text" placeholder='Card Number'/>
      <input type="text" placeholder='CVV'/>
      <input type="text" placeholder='Expiration Date'/>
      <p className='total'>Total: {cartData?.totalPrice || 0} ₪</p>
      <button className='pay-btn' onClick={() => payment()}>Pay</button>
    </div>
  )
}
