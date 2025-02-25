import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'
import userState from '../../types/userState'
import './NavBar.css'
import CartIcon from '../CartIcon/CartIcon'
import Logo from '../Logo/Logo'

export default function NavBar() {
  const user = useAppSelector((state: any) => state.user.user)
  return (
    <div className='nav-container'>

      <NavLink to='/' className='nav-item'>Home</NavLink>
      {!user && <NavLink to='/login' className='nav-item'>Login</NavLink>}
      {user && <NavLink to='/logout' className='nav-item'>Logout</NavLink>}
      <NavLink to='/register' className='nav-item'>Register</NavLink>
      <NavLink to='/contact' className='nav-item'>Connect-us</NavLink>
      <NavLink to='/my-profile' className='nav-item'>Profile</NavLink>
      <NavLink to='/my-cart' className='nav-item cart-nav'>
      <CartIcon />
      </NavLink>
      <Logo/>

    </div>
  )
}
