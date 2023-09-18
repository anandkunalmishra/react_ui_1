import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <h4>annaBooking</h4>
        <div className='authenticate'>
            <div>
                <button>Register</button>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar