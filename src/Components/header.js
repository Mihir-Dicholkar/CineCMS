import React from 'react'
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header  ()  {
  return (
<nav className='navbar'>
<div className='navbar-logo-border'></div>
<img src='/main-logo.png' alt='logo' className='navbar-logo'/>
  <div className='navbar-logo-wrapper'>  
  <h1>CineCMS</h1>
</div>
  <ul className='navbar-links'>
    <li><Link to="/#love-cinecms">Features</Link></li>
     <li><Link to="/#simplified-steps"> How it Works</Link></li>
      <li><Link to="/#artist-presence">Artist Accounts</Link></li>
       <li><Link to="/#perfect-plan">Pricing</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
  </ul>
  <div className='navbar-buttons'>
    <button className='login-btn'>Login</button>
    <button className='signup-btn'>Sign Up</button>
  </div>
</nav>
  );
}

export default Header;