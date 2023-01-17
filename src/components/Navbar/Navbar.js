import React from 'react'
import Logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../context/authcontext'
import {BsFillCartCheckFill} from "react-icons/bs";


const Navbar = () => {
  const {Logout, cartItem} = useAuth()
  console.log(cartItem)
  const getSignature = localStorage.getItem("signature");

  const handleLogout = ()=>{
    Logout()
  }
  return (
    <nav >
        <div className="logo-container">
            <img src={Logo} alt="logo" />
            <h3>Food Review Blog</h3>
        </div>
        <ul>
            <li className='active'> <Link to="/" className='link'>Home</Link></li>
            {
              !getSignature ?(<>
               <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/register" className='link'>Signup</Link></li>
              </>) : (<> <li><Link to="#" className='link' onClick={handleLogout}>Logout</Link></li></>)
            }
           <Link to="/cart-details"><BsFillCartCheckFill className="cart-basket"/>{cartItem.length !==0 && <sup className="cart-count">{cartItem.length}</sup>}</Link>
        </ul>
    </nav>
   
  )
}

export default Navbar