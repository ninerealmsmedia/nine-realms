import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

const AboutPage = () => (

  <Layout>
    <Seo title="About" keywords={[`web application`, `design`, `nine realms`]} />
    <div className="page-header">
      <div className="wrapper">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="box">
            <h2 style={{ fontSize: `4em`, color: `white`, }}>OPPS!</h2>
            <p style={{ fontSize: `2em`, color: `white`, }}>This page is under construction.</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    
    <div className="wrapper">

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">

        <span style={{ clear: `both`, color: `#FF6B6B`, fontSize: `1.6em`, marginTop: `8vh`, display: `block`, marginBottom: `8vh`, }}>We're working to make it amazing. Please come back later!</span>
 
        </div>
      </div>


      

    

    </div>

    <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>
    
    </div>
  </Layout>

)


export default AboutPage