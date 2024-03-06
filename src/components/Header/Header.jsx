import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} className='logo'/>
        <ul className='header-menu'>      
            <li><Link to='Home'>Home</Link></li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li><Link to="Testimonials" smooth="true"> Testimonials</Link></li>
        </ul>

    </div>
  )
}

export default Header