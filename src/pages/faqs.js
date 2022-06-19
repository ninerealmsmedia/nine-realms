import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import "../styles/faq.scss"

const FAQs = () => (
    <Layout>
        <Seo title="FAQs" />
        <Helmet>
            <script key="https://code.jquery.com/jquery-3.5.1.min.js" src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous" />
            <script y="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/Ask@master/ask.js" />
            <script key="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/Sorti@master/sorti.js" />
            <script key="https://kit.fontawesome.com/2be4d518aa.js" src="https://kit.fontawesome.com/2be4d518aa.js" crossorigin="anonymous" />
        </Helmet>

        <div className="page-header">
            <div className="wrapper">
                <div className="row" style={{ justifyContent: `center`, alignContent: `center`, alignItems: `center`, textAlign: `center`, }}>
                        
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="box">
                                    <a href="https://tawk.to/chat/5d3a5ba89b94cd38bbe9557c/1g5rk4k2o" target="_blank"><span style={{ fontSize: `3.5vw`, fontWeight: `bold`, color: `white`, }}><b>Live Chat is Available</b>.</span></a>
                                    </div>
                                </div>
                        </div>

            </div>
        </div>

        
        <div className="space"></div>                                

        <div className="wrapper">

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="tab-nav">
                        <Link id="1">Web Application</Link >
                        <Link id="2">Branding</Link >
                        <Link id="5">Graphic Design</Link>
                        <Link id="3">Film Editing</Link>
                        <Link id="4">Retainer Services</Link>
                    </nav> 
                </div>

                <div className="tab-panel" id="1-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                    <div className="box">
                        <h2 id="1">Web Application</h2>
                    <dl className="questions">
                            <dt>What is a web application?</dt>
                                <dd>A web application is a website that gives the feel and functionality of a mobile app.</dd>
                            <dt>Does my business need a web application?</dt>
                                <dd>It depends on what your business is and where you want to take it. Drop us an e-mail and we'll talk about it.</dd>
                            <dt>Can you build me a basic website?</dt> 
                                <dd>We can build a basic website with our CMS.</dd>
                        </dl>
                    </div>
                </div>
                </div>

                <div className="tab-panel" id="2-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="2">Branding</h2>
                            <dl className="questions">
                            <dt>Can I request special additions?</dt>
                                <dd>We accept additions to branding packets for an additional $100.</dd>
                        </dl>
                        </div>
                    </div>
                </div>
                
                <div className="tab-panel" id="3-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="3">Film Editing</h2>
                            <p>Any film related service is considered a special service that is handled by the film crew at 9 Realms Media. Drop us an e-mail with the details for your film project.</p>
                       
                        </div>
                    </div>
                </div>
                
                <div className="tab-panel" id="4-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="2">Retainer Services</h2>
                        <dl className="questions">
                                <dt>Can I have a discount if I sign a two-year contract?</dt>
                                    <dd>Yes, we offer discounts for businesses that sign a two-year contract for our retainer services. Please call us or drop us an e-mail for details.</dd>
                                <dt>Can I have a discount if I order multiple projects?</dt>
                                <dd>It depends on the projects. Larger projects receive a discount.</dd>    
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="tab-panel" id="5-panel">
                    <h2 id="5">Graphic Design</h2>
                    <dl className="questions">
                            <dt>Do you design for full cover jackets?</dt>
                                <dd>Yes, we do. It's an additional $30.</dd>
                        </dl>
                </div>
            </div>

         </div>

         <div className="space"></div>

         <div className="section-title pink">
            <div className="wrapper">
                <div className="row">
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11" style={{ textAlign: `center`, color: `white`, }}>
                    <p>Don't feel like talking, but still have questions?</p>
                    <p style={{ fontSize: `5vh`, fontWeight: `700`, textShadow: `2px 8px 0 rgba(0, 0, 0, 0.4)`, }}>Drop Us an E-Mail.</p>
                </div>
                </div>
            </div>
        </div>

        <div className="space"></div>

        <div className="wrapper">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="box">
                    <form method="post" action="https://getform.io/f/32ad88a2-f813-42c4-9972-3d8fb280b264" className="contact-faq" id="form-contact">
                    
                        <input type="email" name="email" placeholder="email"/>
                        
                        <input type="text" name="name" placeholder="name" />
                        
                        <textarea type="text" name="message" placeholder="message" />

                        <button type="submit" form="form-contact" value="Submit">Submit</button>
                    </form>
                </div>
        </div>
            </div>
        </div>

        

    

        <div className="space"></div>   
    </Layout>
)

export default FAQs