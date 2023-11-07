import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__links-box">
          <Link to="/" className="footer__link">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="footer__links-box">
          <h3 className="footer__links-heading">Launch</h3>
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="/privacy" className="footer__link">
            Privacy
          </Link>
          <Link to="/orb-operations" className="footer__link">
            Orb Operations
          </Link>
        </div>
        <div className="footer__links-box">
          <h3 className="footer__links-heading">Resources</h3>
          <Link to="/resource-list" className="footer__link">
            Resources List
          </Link>
          <Link to="/exchange" className="footer__link">
            Exchange
          </Link>
          <Link to="/bittensor-staking-guide" className="footer__link">
            Bittensor Staking Guide
          </Link>
        </div>
        <div className="footer__links-box">
          <h3 className="footer__links-heading">Community</h3>
          <Link to="/discord" className="footer__link">
            Discord
          </Link>
          <Link to="/github" className="footer__link">
            GitHub
          </Link>
          <Link to="/telegram" className="footer__link">
            telegram
          </Link>
        </div>
      </div>
      <p className="footer__copyright">
        &copy;2023-2024 Worldcoin All rights reserved
      </p>
    </div>
  );
};

export default Footer;
