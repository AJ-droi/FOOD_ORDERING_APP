import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import "./Footer.css"
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <section className="social">
            <img src={Logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, tenetur.</p>
            <div className='social-icons'>
                <Link to=" " className='social-link'><FaFacebookF /></Link>
                <Link to=" " className='social-link'><FaInstagram /></Link>
                <Link to=" " className='social-link'><FaTwitter /></Link>
            </div>
        </section>
        <section className="location">
            <h3>Locations</h3>
            <ul>
                <li>Lagos</li>
                <li>London</li>
                <li>Ontario</li>
                <li>Oslo</li>
            </ul>
        </section>
        <section className="links">
            <h3>Links</h3>
            <ul>
                <li><Link to=" " className='link' >Home</Link></li>
                <li><Link to=" " className='link'>About</Link></li>
                <li><Link to=" " className='link'>Menu</Link></li>
                <li><Link to=" " className='link'>Gallery</Link></li>
                <li><Link to=" " className='link'>Contact</Link></li>
            </ul>
        </section>
        <section className="company">
            <h3>Company</h3>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy & Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer
