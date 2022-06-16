import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const BasicWebsitePage = () => (

  <Layout>
    
    <Seo title="Services" />

    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4em`, color: `white`, }}>Services</h2>
                <p style={{ fontSize: `2em`, color: `white`, }}>A brochure website built for speed and simplicity. Check out the <Link to="../../coming-soon">demo</Link>.</p>
                </div>
            </div>

            </div>
    </div>
    </div>


    <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>

    <div className="wrapper">

    
    <div className="row">
    
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">

          <h3>Basic websites are<b> &#36;800</b>.</h3>
          <p>It's a flat rate. No hidden fees.</p>
          <p>Ideal for brands that need a website to convey information and show off their goods or services. Check out the <Link to="../../coming-soon">demo</Link> or chat with us to find out if this service is a fit.</p>
          <p>These websites are easy to use, fast, and unique. More importantly, each is custom built to the client, which leaves it open to copyrighht or trademark without troubles. Transfer it anywhere, at anytime, and add new features at little to no cost.</p>
          <p>Our basic websites are secure, too!</p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">

          <StaticImage src="../../images/svgs/basic-websites.svg" />

        </div>
      </div>

      {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <p>Please read the <Link to="/">Client Responsibility</Link> page to find out more.</p>
        </div>
      </div> */}
      
    </div>

    </div>
    <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>
  </Layout>

)


export default BasicWebsitePage