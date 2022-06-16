import * as React from "react"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => (

    <footer>
      <div className="wrapper">


        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box">
             <h3 style={{ fontSize: `5vh`, }}>Say Hello!</h3> 
            </div>
            
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box">

            
             <address>
               hello&#40;at&#41;9realmsmedia.com<br/>
               &#40;570&#41; 373&#95;6577<br/>
               109 Bridge St &#35;721<br/>
               Tunkhannock, PA 18657<br/>
             </address>

             <p>Monday through Thursday, 9 am to 5pm</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box">
              <h3>Quick Links &rsaquo;</h3>
              <ul className="footer-links">
                <li><Link to="/coming-soon" className="hvr-sweep-to-top">Merchandise</Link></li> 
                <li><Link to="/coming-soon" className="hvr-sweep-to-top">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="box">
            <h3>Memberships &rsaquo;</h3>
              <ul className="footer-links">
                <li><a href="https://wyccc.com/" className="hvr-sweep-to-top">Wyoming County Chamber of Commerce</a></li>
              </ul>
             
            </div>
          </div>

        </div>


        <div className="row">

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"  style={{ borderTop: `1px solid white`, }}>
            
              <p>2022 - 2023 &copy; Nine Realms Media | All Rights Reserved</p>
           
          </div>
  

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ borderTop: `1px solid white`, }}>
            <div style={{ textAlign: `right`, }}>
              
            </div>
          </div>

          </div>

      </div>
    </footer>

)

export default Footer