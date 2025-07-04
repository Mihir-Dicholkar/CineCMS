import React from 'react'
import './footer.css'

function Footer(){
    return (
        <footer className='footer'>
            {/* <div className='footer-logo-border'></div> */}
              <div className='footer-logo-border'> 
              
                </div>  <img src='/main-logo.png' className='footer-logo-img'/>
            <div className='footer-logo'>
                <h1>CineCMS</h1>
           </div>
            <p>&copy; {new Date().getFullYear()} CINECMS. All rights reserved. Music Distribution Reimagined.</p>
            <div className='footer-links'>
                <a href='/'>Privacy Policy</a>
                <a href='/' id='center'>Terms & Services</a>
                <a href='/'>
                Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer