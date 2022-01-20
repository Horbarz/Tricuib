import React from 'react'
import { Hero_Image } from './Hero_Image'

export const Hero_One = () => {
    return (
        <>
            <div className="hero_row">
                <div className="hero_col">
                    <h4>
                        Triple brand solution<br/> consisting of Copywriting,<br/> <span>UI/UX &amp; Web Design for <br/>organizations ranging from <br/>startups to Fortune 100s.</span>
                    </h4>
                    <p>
                        <span>Launch your business</span> in a few days with <br />our three coordinated strategy.</p>
                </div> 
            </div>
                <div className="img_row1">
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/online.png"} /> 
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/indoor.png"} /> 
                <img style={{"marginLeft":"-20px"}} alt="" src={process.env.PUBLIC_URL + "/assets/objects/hero_one_line_two.svg"} /> 
            </div>
        </>
        
    )
}
