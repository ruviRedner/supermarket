import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout-container'>
      <div className="header">
        <NavBar />
        <Logo />
      </div>

    </div>
  )
}
