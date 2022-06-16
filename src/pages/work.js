import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"

import "../styles/portfolio.scss"

const Portfolio = () => (

    <Layout>
    <Seo title="Work"/>

    <div className="page-header">

    <div className="wrapper">
    <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                <div className="box">
                <h2 style={{ fontSize: `4em`, color: `white`, }}>Not enough people are their own fan.</h2>
                <p style={{ fontSize: `2em`, color: `white`, }}>- Judia Krakowski (Founder)</p>
                </div>
            </div>

            </div>
    </div>
    </div>

    <div style={{ display: `block`, height: `15vh`, width: `100%`, }}></div>

    <div className="wrapper">
        <div className="row">


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="box" style={{  textAlign: `center`,}}>
                    
               
                    <h2 style={{ fontSize: `4vh`, margin: `4vh`, }}>Sample Works.</h2>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box branding">
                <StaticImage src="../images/work/dummy_theme.png" />
                <br/><br/>
                <h3>Web Design</h3>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box illustration">
                <StaticImage src="../images/work/branding.jpg" />
                <br/><br/>
                <h3>Branding</h3>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="box illustration">
                <StaticImage src="../images/work/flat-illustration.svg" />
                <br/><br/>
                <h3>Flat Illustration</h3>
                </div>
            </div>




        </div>
    </div>
    
    <div style={{ display: `block`, height: `25vh`, width: `100%`, }}></div>

    
</Layout>

)

export default Portfolio

