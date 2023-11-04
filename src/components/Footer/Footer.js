import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__links">
        <div className="footer__links-box">
         <h3 className="footer__links-heading">
         LOGO
         </h3>
        </div>
        <div className="footer__links-box">
         <h3 className="footer__links-heading">
         Heading One
         </h3>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
        </div>
        <div className="footer__links-box">
         <h3 className="footer__links-heading">
         Heading One
         </h3>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
        </div>
        <div className="footer__links-box">
         <h3 className="footer__links-heading">
         Heading One
         </h3>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
        </div>
        <div className="footer__links-box">
         <h3 className="footer__links-heading">
         Heading One
         </h3>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
         <Link to="/" className='footer__link'>Link One</Link>
        </div>
      </div>
      <p className="footer__copyright">All Rights Reserved World Coin &copy;</p>
    </div>
  )
}

export default Footer