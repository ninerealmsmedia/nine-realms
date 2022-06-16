import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"

import "../../styles/services.scss"



const UpkeepPage = () => (

  <Layout>
    
    <Seo title="Services" />
    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4em`, color: `white`, }}>Services. </h2>
                <p style={{ fontSize: `2em`, color: `white`, }}>Keep your code updated to increase security.</p>
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
              <h3 id="maintenance">Retainer Rates</h3>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>"Any sufficiently advanced technology is indistinguishable from magic."</h2>
              <p>- Arthur C. Clarke</p>
            </div>
          </div>

          <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <h3>Montlhy Maintenance Plan</h3>
              <p>With our monthly maintenance plan, you have a tech team to update your website <i>and</i> content regularly.</p>
              <ul className="check">
                <li>Security Checks</li>
                <li>Regular Updates</li>
                <li>Issue Resolution</li>
                <li>Monitoring</li>
                <li>Back-ups and Recovery</li>
                <li>SEO</li>
              </ul>
              <p>We <i>will</i> handle issues on your behalf.</p>
              <div className="price">
                <span className="regular-price">&#36;50 Monthly</span>
                 
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <h3>Yearly Maintenance Plan</h3>
              <p>With our yearly maintenance plan, you still get the same great service with some extras. Best of all, you save money.</p>
              <ul className="check">
                <li>Security Checks</li>
                <li>Regular Updates</li>
                <li>Issue Resolution</li>
                <li>Monitoring</li>
                <li>Back-ups and Recovery</li>
                <li>Image Optimization</li>
                <li>SEO</li>
                <li>Content Edits</li>
                
              </ul>
              <div className="price">
                <span className="regular-price">&#36;500 Yearly</span>
                 
              </div>
            </div>
           </div>

           <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>

           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <div className="box">
               <p>To properly serve our clients, we must have access to both the website and hosting account. </p>
             </div>
           </div>


           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box" style={{  
              textAlign: `center`,
            }}>
              <h2 style={{ fontSize: `5vh`, margin: `8vh`, marginBottom: `0`, color: `#FF6B6B`, }}>Assistance</h2>
              <p>One time services for those that need it.</p>
            </div>
          </div>


          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <h3 id="audit">Website Audit</h3>
              <p>We diagnose sick websites by checking these points:</p>
              <ul className="check">
                <li>Operating Version</li>
                <li>Bugs and Hacks</li>
                <li>Plugin Dependencies</li>
                <li>General Security</li>
                <li>SEO</li>
                <li>Hosting Setup</li>
                <li>...and more!</li>
              </ul>
              <p>We <i>will</i> handle issues on your behalf.</p>
              <span className="price">&#36;100 per website &#x5b;Flat Rate&#x5d;</span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="box">
              <h3 id="repair">Repair</h3>
              <p>If you know what the problem is, then hire us for a repair.  </p>
              <span className="price">&#36;70 an hour</span>

              <br/>

              <h3 id="both">Audit and Repair</h3>
              <p>If you know what the problem is, then hire us for a repair.  </p>
              <span className="price">&#36;150 per website &#x5b;Flat Rate&#x5d;</span>

            </div>
           </div>

        </div>
      </div>
    </div>

   
  </Layout>

)


export default UpkeepPage