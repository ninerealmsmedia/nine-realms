import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Featured from "../components/featured/home-featured"
import Newsletter from "../components/newsletter/newsletter"
import Alert from "../components/alert/alert"

import "../styles/home.scss"
import "../styles/animate.scss"

import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => (
 
  <Layout>
    <Seo title="Home" />
    <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <script key="https://cdn.jsdelivr.net/gh/jvkrakowski/alert-box@main/alert-box.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/alert-box@main/alert-box.js" />
  </Helmet>
    <Alert />
    <Featured />
    <Newsletter />

    <div className="section-title" style={{ background: `#4ecdc4`, }}>
      <div className="wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: `center`, }}>
            <p className="homepage-title">Current Projects <span className="animate__animated animate__bounce animate__slow animate__infinite" style={{ display: `inline-block`, fontSize: `9vw`,
            fontWeight: `bolder`,
            color: `white`,
            textShadow: `2px 8px 0 rgba(0, 0, 0, 0.4)`, }}>&darr;</span></p>
          </div>
        </div>
      </div>
    </div>

    <div className="item-home">
    <div className="wrapper">

        <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="box">
                  <StaticImage src="../images/work/pandamomium.svg"/>
                </div>
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="box">
                  <StaticImage src="../images/work/coming-soon.jpg" />
                  <br/><br/>
                  <StaticImage src="../images/work/coming-soon.jpg" />
                </div>
                
              </div>

            </div>
        </div>
      </div>


      <div className="section-title">
      <div className="wrapper">

        <div className="row">

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11" style={{ textAlign: `center`, }}>
            <p className="homepage-title">Service Specials <span className="animate__animated animate__bounce animate__slow animate__infinite" style={{ display: `inline-block`, fontSize: `9vw`,
            fontWeight: `bolder`,
            color: `white`,
            textShadow: `2px 8px 0 rgba(0, 0, 0, 0.4)`, }}>&darr;</span></p>
          </div>
        
        </div>
      </div>
    </div>


    <div className="item-home">
    <div className="wrapper">

        <div className="row around-xs">

              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <div className="box extra" style={{ background: `#4ECDC4`, color: `white`, }}>
                <h2 className="special-title">Ask About</h2>
                <p>Discounts for:</p>

                <ul>
                  <li>Veterans</li>
                  <li>Seniors</li>
                  <li>Non-Profit Organizations</li>
                  <li>Children</li>
                </ul>
                <p style={{ fontWeight: `normal`, }}>Discounts excludes non-profit political organizations and organizations that participate in lobbying for political organizations.</p>
                </div>
                
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="box extra" style={{ background: `#FFE66D`, }}>
                  <h2 className="special-title" style={{ color: `black`, }}>Retainer Rates</h2>
                    <br/>
                  <div className="row" style={{ textAlign: `center`, }}>
                    
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <h3>Yearly</h3>
                      <br/>
                      <h4><b>&#x24;500</b></h4>
                      <ul style={{ textAlign: `left`, }}>
                        <li>Security Checks</li>
                        <li>Regular Updates</li>
                        <li>Content Edits</li>
                        <li>Issue Resolutions</li>
                      </ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3>Monthly</h3>
                      <br/>
                      <h4><b>&#x24;50</b></h4>
                      <ul style={{ textAlign: `left`, }}>
                        <li>Security Checks</li>
                        <li>Regular Updates</li>
                        <li>Issue Resolutions</li>
                      </ul>
                    </div>

                    <p>Custom services available.</p>
                  </div>
                </div>
                
              </div>

            </div>
        </div>
      </div>





  </Layout>
)

export default IndexPage