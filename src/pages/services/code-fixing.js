import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const CodeFixingPage = () => (

  <Layout>
    
    <Seo title="Services" />
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="box">
      <p className="intro"><Link to="/services">Services</Link> - Code Fixing</p>
      </div>
      </div>


      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">

          <p>Whether it was built with WordPress or Drupal, we can find a fix for your problem. We charge a <u>flat fee of <b>$55</b> an hour.</u></p>

        <p>To properly assess and fix the issue, we need access to the admin dashboard and hosting dashboard. Some hosting companies offer developer access. Your representative can tell you how to or if you can do this.</p>

        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="box">

        <p>For regular service, please check out our maintenance plans. For consults concerning an existing or upcoming project, we offer an affordable consult service.</p>

        <p>All hourly rate services are recorded with an in-house time tracker. Records are available by invoice or via the client dashboard.</p>

        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="banner">

        <p className="cta">Earn money with a business account.</p>
        <Link to="/" style={{
          background: `black`,
          color: `white`,
          padding: `10px`,
          minWidth: `70px`,
          textAlign: `center`,
        }}>Learn More</Link>

        </div>
        </div>

      

      
    </div>
  </Layout>

)


export default CodeFixingPage