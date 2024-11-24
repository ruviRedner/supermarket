import React from 'react'
import { Root } from 'react-dom/client'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { checkout } from '../../redux/slices/cartSlice'

export default function MyCart() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cardData = useSelector((state: RootState) => state.cart.data)
  const products = useSelector((state: RootState) => state.cart.data!.receipt)

  const payment = async() => {
    const user_id = useAppSelector((state: RootState) => state.user.user?._id)
    const newCart = {...cardData, user_id}
    await dispatch(checkout(newCart))
    navigate('/pay')}
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
              <p>${product.price * product.quantity}</p>
            </div>
          </div>
      )): <p>Cart is empty</p>}
      </div>
      <div className="cart-total">
        <h3>Total:</h3>
        <p>${cardData?.totalPrice}</p>
        <button onClick={() => payment()}>to Pay & Confirm</button>
      </div>

    </div>
  )
}
