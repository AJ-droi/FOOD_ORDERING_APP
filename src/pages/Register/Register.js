import React, {useState} from 'react'
import './Register.css'
import registerbg from '../../assets/registerbg.svg'
import Card from '../../components/card/Card'
//import {Link} from "react-router-dom"
import { useAuth } from '../../context/authcontext'

const Register = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
      const{name, value} = e.target
      setFormData({...formData, [name]: value})
  }

  const {registerConfig} = useAuth();

  const handleSubmit = (e) => {
      e.preventDefault()
      registerConfig(formData)

      // setFormData({})

  }

  return (
    <div className='register-container'>
        <div className ="bg-background">
            <img src={registerbg} alt=" " />
        </div>

        <div className='form-style'>
            <Card >
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder='enter your name' onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="name">Phone</label>
                  <input type="phone" name="phone" id="name" placeholder='enter your phone' onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" placeholder='enter your password' onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm <br /> Password</label>
                  <input type="password" name="confirm_password" id="confirmPassword" placeholder='confirm password' onChange={handleChange}/>
                </div>

                <div>
                  <div></div>
                  <div className='btn-container'>
                    <button type="submit">Register</button>
                  </div>
                </div>
                
              </form>
              

            </Card>
        </div>
    </div>
  )
}

export default Register