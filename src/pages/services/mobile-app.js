import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const MobileAppPage = () => (

  <Layout>
    
    <Seo title="Services" />
    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4em`, color: `white`, }}>Services. </h2>
                <p style={{ fontSize: `2em`, color: `white`, }}>Connect with a greater audience through the app store.</p>
                </div>
            </div>

            </div>
    </div>
    </div>

    <div className="service-hero">

      <div className="wrapper">
        <div className="row">

        {/* title section */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box" style={{  
              textAlign: `center`,
            }}>
              <h3>Mobile Development</h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>"There's nothing wrong with taking the scenic route to your goals."</h2>
              <p>- Judia Krakowski (Founder)</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <p>There are <a href="https://www.statista.com/statistics/218984/number-of-global-mobile-users-since-2010/" target="_blank" rel="noreferrer">7.1 billion mobile users</a> in the world. Of that number, <a href="https://www.statista.com/statistics/201182/forecast-of-smartphone-users-in-the-us/" target="_blank" rel="noreferrer" >298 million</a> of them live in America. Large brands like Walmart, Amazon, and Target have taken advantage of the numbers with mobile apps that allow users to shop from anywhere. It widens their customer base to include people that otherwise would've never shopped with them.</p>
              <p>Work with our team of experts to create a mobile app for your brand. Build a utility tool or take your store experience digital. We'll work together to create something awesome.</p>
              <p>We do <b>not</b> create mobile games, though.</p>
              <span className="price">
                Starts at $12,000
              </span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <p>The price of mobile app development depends on:</p>
              <ul>
                <li>Complexity</li>
                <li>Features</li>
                <li>Timeline</li>
              </ul>
              <p>All of our mobile app projects have a timeline of <i>six months or more</i>. Schedule a discovery call with our team to learn more.</p>
            </div>
           </div>

        </div>
      </div>
    </div>

    
   
  </Layout>

)


export default MobileAppPage