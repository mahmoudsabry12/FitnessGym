import React from 'react'
import './Footer.css'
import Githup from '../../assets/github.png'
import Integram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className="social-logo">
                <img src={Githup} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Integram} alt="" />
             </div>
            <div className='logo-f'>
                <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer