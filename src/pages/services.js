import * as React from "react"
// import { getLowResolutionImageURL, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import "../styles/services.scss"
import { Helmet } from "react-helmet"



const ServicePage = () => (

  <Layout>
    <Helmet>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    </Helmet>
    <Seo title="Services" />

    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4vw`, color: `white`, }}>Success is a journey, not a destination. </h2>
                <p style={{ fontSize: `2vw`, color: `white`, }}>- Arthur Ashe</p>
                </div>
            </div>

            </div>
    </div>
    </div>
    
    <div className="service-hero">


{/* process section */}
  <div className="wrapper">
    <div className="row">
      {/* title section */}
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="box" style={{  
        textAlign: `center`,
      }}>
        <h3>Web and Mobile Development</h3>
        <h2 style={{ fontSize: `5vw`, margin: `8vw`, }}>We help people build a better path to their goals.</h2>
      </div>
    </div>

{/* title section */}
            {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <Link to="/services/web-application"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Web Applications</span>
        </div></Link>
      </div>

      {/* end */}
      {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Link to="/services/basic-website"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Basic Websites</span>
        </div>
        </Link>
      </div>


      {/* end */}


      {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Link to="/services/mobile-app"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Mobile Apps</span>
        </div></Link>
      </div>


      {/* end */}
      <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>

      {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Link to="upkeep#maintenance"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Maintenance</span>
        </div></Link>
      </div>


      {/* end */}


      {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Link to="upkeep#repair"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Repair</span>
        </div></Link>
      </div>

      {/* end */}

      {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Link to="upkeep#audit"><div className="box display-middle">
          <span style={{ fontSize: `3vw`, }}>Audit</span>
        </div></Link>
      </div>

      {/* end */}
    </div>
 
  </div>

    </div>




  {/* hero section ends */}

  {/* services section */}
  <div className="type">
    <div className="wrapper">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="box">
            <h3>Media</h3>
              <h2 style={{ fontSize: `5vw`, margin: `8vh`, }}>We help people be the change they need.</h2>
          </div>
        </div>
        {/* start */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div className="box white">
          <Link to="multimedia"><span style={{ fontSize: `3vw`, }}>Corporate Videos</span></Link>
          </div>
        </div>
        {/* end */} 

        {/* start */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="box white">
              <Link to="multimedia"><span style={{ fontSize: `3vw`, }}>Film Editing</span></Link>
              </div>
        </div>
        {/* end */}    

        {/* start */}
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="box white">
                <Link to="multimedia"><span style={{ fontSize: `3vw`, }}>Photography</span></Link>
              </div>
        </div>
        {/* end */} 


      </div>
    </div>
  </div>

  <div className="wrapper">
  <div style={{ display: `block`, height: `12vh`, width: `100%`, }}></div>
      {/* media end */}

      <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="box" style={{  
            textAlign: `center`,
            }}>
              <h3>Design</h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, }}>We help people understand their needs.</h2>
          </div>
        </div>

        {/* start */}

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Link to="design#branding"><div className="box display-middle">
            <span style={{ fontSize: `4vw`, }}>Branding</span>
          </div></Link>
        </div>

      {/* end */}

         {/* start */}

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Link to="design#design"><div className="box display-middle">
            <span style={{ fontSize: `4vw`, }}>Graphic Design</span>
          </div></Link>
        </div>

      {/* end */}

      </div>
      
</div>

<div style={{ display: `block`, height: `25vh`, width: `100%`, }}></div>
  



  </Layout>

)


export default ServicePage