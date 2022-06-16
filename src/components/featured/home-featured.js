import * as React from "react"

import "../../styles/services.scss"
import "./home-featured.scss"


const Featured = () => {

    return (

        <div className="top-header">
            
            <div className="wrapper">
           <div className="row center-xs">
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7" style={{ 
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        textAlign: `center`,
                     }}>
                        <div className="box home-slogan">
                        <span style={{
                            fontSize: `3.5vw`,
                            fontWeight: `bold`,
                        }}><b>Create Your Saga</b>.</span>
                        <br/>
                        <span style={{
                            fontSize: `1.5vw`,
                            fontWeight: `bold`,
                        }}>with the experts.</span>
                        {/* <p>We know how hard it can be to build a support circle. Battle Buddy is here to help.</p>
                        <Link to="#" target="_blank" className="home-button">Read More</Link> */}
                        {/* <StaticImage src="../../images/svgs/home-main-comp.svg" style={{ display: `block`, float: `right`, }}/> */}
                        </div>
                    </div>

                    {/* <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="box">
                            <StaticImage src="../../images/svgs/home-main-comp.svg" />
                    </div>
                    </div> */}

                    </div>
           </div>

        </div>

    )

}

export default Featured