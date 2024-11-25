import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/slices/userSlice'
import cartSlice from '../../redux/slices/cartSlice'

export default function Logout() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = async () => {
         dispatch(logout())
         dispatch(cartSlice.actions.logout())
         navigate('/')
    }
    return (
        <div>
            <h2>
                Are you sure you want to logout
            </h2>
            <button onClick={  handleLogout}>Confirm</button>
            <button>Cancel & Close</button>
        </div>
    )
}
