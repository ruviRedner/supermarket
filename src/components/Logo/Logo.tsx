import React from 'react'
import './Logo.css'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const navigate = useNavigate()
  return (
    <div className='logo-container'>
      <img src="https://cdn-eu.dynamicyield.com/api/9879135/images/2ac33f329192d__comp-1.gif" alt="logo"
      onClick={() => navigate('/')}
      />
    </div>
  )
}
