import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

const AboutPage = () => (

  <Layout>
    <Seo title="About" keywords={[`web application`, `design`, `nine realms`]} />
    <div className="page-header">
      <div className="wrapper">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="box">
            <h2 style={{ fontSize: `4em`, color: `white`, }}>A girl should be two things: who and what she wants.</h2>
            <p style={{ fontSize: `2em`, color: `white`, }}>- Coco Chanel.</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    
    <div className="wrapper">

    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">

        <span style={{ clear: `both`, color: `#FF6B6B`, fontSize: `1.6em`, marginTop: `8vh`, display: `block`, marginBottom: `8vh`, }}>Nine Realms Media is a digital studio of hardworking experts that specialize in research-supported, enriching, and interactive web experiences.</span>
 
        </div>
      </div>


      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <p>Creating the web experience should be more than expected. Why follow the boring, everyday path? Shake it up with something colorful, exciting, and fun. The unexpected is memorable, and that is what you want. We love doing that.</p>
          <p>We're creative experts that craft awesome stuff for ambitious businesses. From corporate videos to mobile apps, we have the knowledge and skill to do it all. Best of all, we're 100% remote <i>and</i> accessible.</p>
        </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="box">
          <p>We're good at adapting to a changing world, and we make sure your brand will too. We set an goal, plan the mission, and aim for the gold standard. We're reliable, exacting, knowledgeable, and edifying.</p>
          <p>After all, we sell solutions not problems.</p>
        </div>
      </div>

      <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="box" style={{ 
          display: `flex`,
          justifyContent: `center`,
          justifyItems: `center`,
          flexDirection: `column`,
          height: `100%`,
         }}>
          <h2>"It utilizes the brain's natural inclination towards dopamine inducing stimulation."</h2>
        </div>
        
      </div>
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
       <div className="box">
         <h2>What We Do</h2>
         <p>We invent fun ways to engage users and create unique, memorable  web experiences. Our approach increases brand awareness, enriches  interactions, and makes clients more relatable. We do that  through a technique called "Gamification."</p>

          <p>We work with  clients to better integrate gamification into their brand. We do that through research and data analysis. By gamifying their website, we improved memory recall through positive association. It  transforms and re-imagines the user experience as a transformative dopamine rush. </p>
         
       </div>
      </div>

      <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>

      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">

        <div className="box">
          <h2>How We Do It</h2>
          <p>As humans, our natural inclination is to gravitate towards pleasurable and rewarding experiences. The rush of dopamine makes us happy and more likely to remember the experience that caused it. Inducing such a rush through a digital experience requires data and finesse.</p>
          <p>Before diving into a design, we perform an evaluation of the client's current setup. We research their industry, pinpoint problem areas, and discuss desired changes. We gather data on their current demographic and gain feedback from their following.</p>
          <p>Once we have enough data, we analyze and convert it into a working blueprint for the project.</p>
        </div>

        

      </div>

      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className="box" style={{ 
            display: `flex`,
            justifyContent: `center`,
            justifyItems: `center`,
            flexDirection: `column`,
            height: `100%`,
          }}>
            <h2>"...our natural inclination is to gravitate towards pleasurable and rewarding experiences."</h2>
          </div>
      </div>


      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="box">
          <span style={{ clear: `both`, color: `#FF6B6B`, fontSize: `1.6em`, marginTop: `8vh`, display: `block`, marginBottom: `8vh`, textAlign: `center`, }}>"Life is too short to be anything but bold." - Judia Krakowski (Founder)</span>
        </div>
      </div>

    

    </div>

    <div style={{ display: `block`, height: `8vh`, width: `100%`, }}></div>
    
    </div>
  </Layout>

)


export default AboutPage