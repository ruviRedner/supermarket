import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/slices/userSlice'
import cartSlice from '../../redux/slices/cartSlice'
import './Logout.css'

export default function Logout() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = async () => {
         dispatch(logout())
         dispatch(cartSlice.actions.logout())
         navigate('/')
    }
    return (
        <div className='logout-container'>
            <h2>
                Are you sure you want to logout
            </h2>
            <button className='logout-btn' onClick={  handleLogout}>Confirm</button>
            <button className='cancel-btn'>Cancel & Close</button>
        </div>
    )
}
