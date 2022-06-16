import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const WebApplicationPage = () => (

  <Layout>
    
    <Seo title="Services" />
    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4em`, color: `white`, }}>Services. </h2>
                <p style={{ fontSize: `2em`, color: `white`, }}>Gain the look and feel of a mobile app without the price.</p>
                </div>
            </div>

            </div>
    </div>
    </div>


    <div className="service-hero">
      <div className="wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box" style={{  
              textAlign: `center`,
            }}>
              <h3>Web Applications</h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>"Success is a frame of mind."</h2>
              <p>- Judia Krakowski (Founder)</p>
            </div>
          </div>


          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box">
                <p>A web application give brands a competitive edge through greater accessibility, stability, and security. It grows with your business. With a web application, you have:</p>
            </div>
          </div>



              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              
              <h3>&#x2713; 24/7 Access</h3>
              <h3>&#x2713; Social Integration</h3>
              <h3>&#x2713; Reporting and Analytics</h3>
              <h3>&#x2713; Web Push Notification</h3>
              <h3>&#x2713; ...and more!</h3>
              <br/><br/>
              <h3 className="service-title">Web Application</h3>
            <p>Included with every web application is:</p>
            <p>&#x2713; Branding<br/>&#x2713; Content Editing<br/>&#x2713; Setup<br/>&#x2713; User Guide<br/></p>
    
          <span className="price">
            Starts at $3,000</span> 
        
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
            <StaticImage src="../../images/svgs/tech.svg"/>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="wrapper">
    <div className="row">

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="box">
          <h3 className="service-title">Business Systems</h3>
          
          <p>Everything a web application comes with plus access to your business services from your dashboard.</p>
          <p>&#x2713; Manage your business from a single dashboard<br/>&#x2713; Integrated Testing Tools<br/>&#x2713; 1 year free maintenance</p>

        

        <div className="price">
            <span className="regular-price">Starts at $10,000</span> 
          </div>

        </div>
      </div>
      
    </div>
    </div>
    <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>
   
  </Layout>

)


export default WebApplicationPage