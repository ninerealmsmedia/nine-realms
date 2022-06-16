import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const DesignPage = () => (

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
              <h3>Design</h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>"Success is a frame of mind."</h2>
              <p>- Judia Krakowski (Founder)</p>
            </div>
          </div>


              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              
              <h3 className="service-title" id="branding">Branding</h3>
            <p>Included with the branding packet:</p>
            <ul className="check">
              <li>Logo</li>
              <li>Favicon</li>
              <li>Icon</li>
              <li>2 - 3 Patterns/Textures</li>
              <li>Business Card Design</li>
              <li>Letterhead Design</li>
              <li>Basic Styleguide</li>
              <li>3 - 4 Post Templates.</li>
              <li>Color Palettes</li>
            </ul>
    
          <span className="price">&#36;1,800</span> 
        
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
            <h3 className="service-title" id="graphic">Book Cover</h3>
            <p>A full design with front, spine, and back cover. Final files include bleed.</p>
            <span className="price"><b>&#36;100</b> Per Cover</span>
            <h3 className="service-title" id="grahpic">Illustration</h3>
            <p>We do vintage/retro, flat, chibi, and line art illustrations. These styles are ideal for children's books, publications, editorials, advertising, and packaging.</p>
            <span className="price"><b>&#36;120</b> Per Illustration</span>
            
            </div>
          </div>

        </div>
      </div>
    </div>
   
  </Layout>

)


export default DesignPage