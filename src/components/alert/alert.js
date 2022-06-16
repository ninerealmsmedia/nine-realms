import * as React from "react"
import { Link } from "gatsby"

import "./alert.scss"


const Alert = () => {

    return (

        <div className="alert">
            <h2>Enter into our <a href="https://forms.gle/dA8KwacSq7bnUtMLA" target="_blank" rel="noreferrer" >Launch Raffle</a> for a <b>Free</b> website!</h2>
            <span className="close">X</span>
        </div>

    )

}

export default Alert