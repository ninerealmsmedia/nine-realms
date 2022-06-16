import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./newsletter.scss"


const Newsletter = () => {

    return (
        
        <div className="newsletter">
            <div className="wrapper">
                <div className="row center-around animate__animated animate__fadeIn animate__slow">

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="box box-modified">
                        <h3 style={{ marginBottom: `2.5vh`, fontWeight: `bold`, }}>01. <br/>Fill out a Client Form</h3>
                        <StaticImage src="../../images/svgs/client-forms.svg" className="hover" style={{ maxWidth: `70%`, }}></StaticImage>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="box">
                    <h3 style={{ marginBottom: `2.5vh`, }}>02. <br/>Schedule a Consult</h3>
                    <StaticImage src="../../images/svgs/phone.svg" style={{ maxWidth: `70%`, }}></StaticImage>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="box">
                    <h3 style={{ marginBottom: `2.5vh`, }}>03. <br/>Choose a Service(s)</h3>
                    <StaticImage src="../../images/svgs/service.svg" style={{ maxWidth: `70%`, }}></StaticImage>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="box">
                    <h3 style={{ marginBottom: `2.5vh`, }}>04. <br/>Create an Account</h3>
                    <StaticImage src="../../images/svgs/account.svg" style={{ maxWidth: `70%`, }}></StaticImage>
                    </div>
                </div>
                                
                                {/* <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="box" style={{
                                    display: `flex`,
                                    alignItems: `stretch`,
                                    justifyContent: `center`,
                                    margin: `9px`,
                                }}>
                                    <span>Subscribe to Our Newsletter</span>
                                </div>

                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="box">
                                    <form action="https://getform.io/f/32ad88a2-f813-42c4-9972-3d8fb280b264" method="POST" className="newsletter-form">
                                        <input type="email" name="email" placeholder="email"/>
                                        <input type="text" name="name" placeholder="name"/>
                                        <button type="submit" className="form-contact">Submit</button>
                                    </form>
                                        
                                    </div>
                                </div> */}
               </div> 
            </div>
            
        </div>
    
    
    )

}

export default Newsletter