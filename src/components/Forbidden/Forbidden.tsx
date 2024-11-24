import React from 'react'
import './Forbidden.css'

export default function Forbidden() {
  return (
    <div className='forbidden'>
      <h2>this page is forbidden</h2>
      <h3>Please login to continue</h3>
      <p>Go to <a href="/">Home</a></p>
      <p>Go to <a href="/login">Login</a></p>
    </div>
  )
}
