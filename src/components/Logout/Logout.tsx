import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
import { logout } from '../../redux/slices/userSlice'

export default function Logout() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <div>
            <h2>
                Are you sure you want to logout
            </h2>
            <button onClick={handleLogout}>Confirm</button>
            <button>Cancel & Close</button>
        </div>
    )
}
