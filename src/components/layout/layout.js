import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Helmet } from "react-helmet"
 import CookieConsent from 'react-cookie-consent'

 
 import Header from "../header/header"
 import Footer from "../footer/footer"
//  import CTA from "../cta/cta"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           author
         }
       }
     }
   `)
 
   return (
       
       <div>
         <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <script key="https://cdn.jsdelivr.net/gh/jvkrakowski/alert-box@main/alert-box.js" src="https://cdn.jsdelivr.net/gh/jvkrakowski/alert-box@main/alert-box.js" />
      </Helmet>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       {/* <CTA /> */}
         <main>{children}</main>
         
         <Footer></Footer>

       </div>
    
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout