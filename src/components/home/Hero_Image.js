import React from "react";

export const Hero_Image = () =>{
    return (
        <>
            <div className="img_row">
                <img className="img_row_1" alt="" src={process.env.PUBLIC_URL + "/assets/objects/hero_one_line.svg"} /> 
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/developing.png"} /> 
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/professional.png"} /> 
            </div>
            {/* <div className="img_row">
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/online.png"} /> 
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/indoor.png"} /> 
                <img alt="" src={process.env.PUBLIC_URL + "/assets/objects/hero_one_line.svg"} /> 
            </div> */}
        </>
    )
}