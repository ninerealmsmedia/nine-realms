import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"


import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="page-header">
      <div className="wrapper">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="box">
          <address style={{ color: `white`, fontSize: `1.5em`, }}>
              <p>109 Bridge St #721 Tunkhannock, PA</p>
              <p>1 (570) 373 - 6577</p>
              <p> hello(at)9realmsmedia.com</p>
            </address>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="box">
          <address style={{ color: `white`, fontSize: `1.5em`, }}>
              <p>Monday - Thursday 9 am to 5 pm</p>
              <p>Friday - Sunday <b>Closed</b></p>
            </address>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>

    <div className="wrapper">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        <div className="box">
          
          <form method="post" action="https://getform.io/f/32ad88a2-f813-42c4-9972-3d8fb280b264" className="contact" id="form-contact">
            <label>Email <input type="email" name="email" /></label>
            <br/><br/>
            <label>Name <input type="text" name="name" /></label>
            <p>I'm interested in...</p>
            <label><input type="checkbox" name="hiring" value="yes" checked /> Hiring Nine Realms</label><br/>
            <label><input type="checkbox" name="collaborate" value="no"/> Collaborating</label><br/>
            <label><input type="checkbox" name="consult" value="no"/> Consult</label><br/>
            <label><input type="checkbox" name="feedback" value="no"/> Feedback</label><br/>
            <label><input type="checkbox" name="something-else" value="no"/> Something Else</label><br/>
            <br/>

            <label>
            Message
            <textarea type="text" name="message" />
            </label>
            <br/><br/>
            <label><input type="checkbox" name="newsletter" value="no"/> Subscribe to Newsletter</label><br/>
            <button type="submit" form="form-contact" value="Submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="box">
        </div>
        </div>  

    </div>
    </div>
    <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>
  </Layout>
)

export default ContactPage
