import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import './Layout.css'
interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className='layout-container'>
      <div className="header">
        <NavBar />
      </div >
      <div className="children">
      {children}
      </div>

    </div>
  )
}
