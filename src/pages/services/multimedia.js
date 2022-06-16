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
              <h3>Multimedia

              </h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>"There's nothing wrong with taking the scenic route to your goals."</h2>
              <p>- Judia Krakowski (Founder)</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <p>Multimedia projects are on a per project, consultation basis only.</p>
              <p>A corporate video is a visual tool that showcases a brand's best products and services to it's customer base. Oftentimes, companies will record these videos yearly as part of their marketing campaigns.</p>
              <p>When a brand finishes recording their video, it needs to be professionally edited. The raw footage is edited for quality storytelling and optimized for a variety of screens. Editing is also where the introduction and special effects are added to the film.</p>
              <p>Photography is an important part of business. Having quality photos for a website, marketing material, and more shows people how much care and consideration is given to a brand.</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <p>Typically, our photography services are given through a web or film project. We <b>do not</b> travel outside of Northeastern Pennsylvania for photography sessions. This is a local only service.</p>
              <span className="price">
               Call for Pricing
              </span>
            </div>
           </div>

        </div>
      </div>
    </div>

    
   
  </Layout>

)


export default MobileAppPage