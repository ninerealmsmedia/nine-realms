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
                                    <span style={{ fontSize: `3.5vw`, fontWeight: `bold`, color: `white`, }}><b>Live Chat is Available</b>.</span>
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
                                <dd>We wrote an entire article about this. <Link to="/">Please check it out.</Link></dd>
                            <dt>Does my business need a web application?</dt>
                                <dd>It depends on what your business is. Check out <Link to="/">the post</Link> we wrote about it.</dd>
                            <dt>How much does it cost?</dt>
                                <dd>A basic application starts at $3000. Please check out our pricing for further information.</dd>
                            <dt>Can you build me a basic website?</dt> 
                                <dd>We can build a basic website with a drop-n-drag CMS</dd>
                        </dl>
                    </div>
                </div>
                </div>

                <div className="tab-panel" id="2-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="2">Branding</h2>
                            <p>All of our branding services come with a web application or intergrated business system package.</p>
                        </div>
                    </div>
                </div>
                
                <div className="tab-panel" id="3-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="3">Film Editing</h2>
                            <p>Any film related service is considered a special service that is handled by the film crew at Nine Realms Media.</p>
                        <dl className="questions">
                                <dt>How much does it cost?</dt>
                                    <dd>It's <b>$500 a day</b> for standard projects. Please schedule a consult for further information.</dd> 
                            </dl>
                        </div>
                    </div>
                </div>
                
                <div className="tab-panel" id="4-panel">
                    <div className="col-xs-12 col-sm-12-col-md-12 col-lg-12">
                        <div className="box">
                            <h2 id="2">Retainer Services</h2>
                        <dl className="questions">
                                <dt>Can I hire a retainer for film?</dt>
                                    <dd>We wrote an entire article about this. <Link to="/">Please check it out.</Link></dd>
                                <dt>Does my business need a web application?</dt>
                                    <dd>It depends on what your business is. Check out <Link to="/">the post</Link> we wrote about it.</dd>
                                <dt>How much does it cost?</dt>
                                    <dd>A basic application starts at $3000. Please check out our pricing for further information.</dd>
                                <dt>Can you build me a basic website?</dt> 
                                    <dd>We can build a basic website with a drop-n-drag CMS</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="tab-panel" id="5-panel">
                    <p>testing</p>
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