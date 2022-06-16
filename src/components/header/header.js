import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"

const Header = ({ siteTitle }) => (

  <header className="animate__animated animate__fadeIn animate__slow">
    
    <div className="row">

      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        <div className="box">
          <h1 className="site-title"><Link to="/">9 Realms Media</Link></h1>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8" style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, }}>
        <div className="box" >
        
        <br/>
        <nav>
              <Link to="/" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Home</Link>
              <Link to="/about" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>About</Link>
              <Link to="/services" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Services</Link>
              {/* <Link to="/blog" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Blog</Link> */}
              <Link to="/events" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Events</Link>
              {/* <Link to="/work" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Work</Link> */}
              <Link to="/contact" activeStyle={{ color: `#292F36`, fontWeight: `bold`, outline: `2px solid black`, padding: `10px`, opacity: `1`, }}>Contact</Link>
            </nav>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2" style={{ textAlign: `right`, }}>
        <div className="box">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScDt9wpJNid4dfUMVlhfvJngUxlCILa6iASbucnAsiyeFB-uQ/viewform?usp=pp_url" className="join-button">Get Started</Link>
        </div>
      </div>
    </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header