import React, { useState } from 'react';
import './login.scss'
import logo from './../../asset/lendsqrlogo.svg'
import art from '../../asset/lendsqrlogin.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
 // Use the useNavigate hook from react-router-dom to handle navigation
 const history = useNavigate();

 // State variables for password visibility and password value
 const [showPassword, setShowPassword] = useState(false);
 const [password, setPassword] = useState('');

 // Function to handle the login action
 const handleLogin = () => {
  // Perform login logic here

  // Redirect to the main page after login
  history('/mainpage');

 };

 // Function to toggle the password visibility
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
 };

 // Function to handle password input change
 const handlePasswordChange = (e: any) => {
  setPassword(e.target.value);
 };
 return (
  <section className="Login">
   <div className='side1'>
    <div className='logo'>
     <img src={logo} alt='logo' />
    </div>
    <div className='art'><img src={art} alt='art' /></div>
   </div>
   <div className='side2'>
    <div className='logo'>
     <img src={logo} alt='logo' />
    </div>
    <form onSubmit={handleLogin}>
     <h1 >Welcome!</h1>
     <h2 >Enter details to login.</h2>
     <input type='text' placeholder='Email' required pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
     <div className='passHolder'>
      <input
       type={showPassword ? 'text' : 'password'}
       placeholder="Password"
       required
       pattern=".{8,16}"
       value={password}
       onChange={handlePasswordChange}
      />
      <button className="show" type="button" onClick={togglePasswordVisibility}>
       <h4>{showPassword ? 'HIDE' : 'SHOW'}</h4>
      </button></div>
     <Link to="/forgotpassword" className='link-no-underline'>
      <h3 className='fw-bolder'>FORGOT PASSWORD?</h3></Link>
     <button className='fw-bolder' type='submit'>LOG IN</button>
    </form>
   </div>
  </section>
 )
}

export default Login;