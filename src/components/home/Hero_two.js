import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Hero_two = (props) => {
    return (
        <div className='hero_two'>
            <div className='cuib_writeup'>
                <h6>{props.sub_header}</h6>
                <h2>{props.main_header}</h2>
                <h3>{props.subject}</h3>
                <hr className={props.line_color ? 'orange_line' : 'blue_line'}/>
                <div className='cuib_rate'>
                    <FontAwesomeIcon icon={faStar} className={props.star_color ? 'orange_star' : 'blue_star'} />
                    <FontAwesomeIcon icon={faStar} className={props.star_color ? 'orange_star' : 'blue_star'} />
                    <FontAwesomeIcon icon={faStar} className={props.star_color ? 'orange_star' : 'blue_star'} />
                    <FontAwesomeIcon icon={faStar} className={props.star_color ? 'orange_star' : 'blue_star'} />
                    <FontAwesomeIcon icon={faStar} className={props.star_color ? 'orange_star' : 'blue_star'} />
                    <p>&nbsp;| Top <span>rated professionals</span></p>
                </div>
                <div>
                    <p>{props.paragraph_one} <br/></p>
                    <p>{props.ending_text}</p>
                </div>
            </div>

            {/* Form input */}
            <div className='cuib_form'>
                <div className='steps'>
                    <button className='step step_active'>Step 1</button>
                    <hr/>
                    <button className='step'>Step 2</button>
                    <hr/>
                    <button className='step'>Step 3</button>
                    <hr/>
                    <button className='step'>Final</button>
                </div>
                <form id="step_1">
                    <div>
                        <input type="text" placeholder='Full Name' />
                    </div>
                    <div>
                        <input type="text" placeholder='Company/Business/Individual Name' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div>
                        <input type="text" placeholder='What type of copy do you need' />
                        <span>                      
                            <FontAwesomeIcon icon={faQuestionCircle} className={props.icon_color ? 'orange_question' : 'blue_question'}/>
                        </span>
                    </div>
                    <div>
                        <input type="text" placeholder='How many words/pages' />
                        <span>                      
                            <FontAwesomeIcon icon={faQuestionCircle} className={props.icon_color ? 'orange_question' : 'blue_question'}/>
                        </span>
                    </div>
                </form>
                <form id='step_2'>
                    <div>
                        <textarea rows={4} placeholder='What are your goals for this copy?' />
                        <span>                      
                            <FontAwesomeIcon icon={faQuestionCircle} className={props.icon_color ? 'orange_question' : 'blue_question'}/>
                        </span>
                    </div>
                    <div>
                        <textarea rows={3} placeholder='who is your target audience for this copy?' />
                    </div>
                </form>
                <form id='step_3'>
                    <div>
                        <textarea rows={4} placeholder='Other details' />
                        <span>                      
                            <FontAwesomeIcon icon={faQuestionCircle} className={props.icon_color ? 'orange_question' : 'blue_question'}/>
                        </span>
                    </div>
                    <label> 
                        <input type="file" hidden/>
                        <div className='file_btn'>
                            Upload additional files
                            <span>Upload</span>
                        </div>
                    </label>
                </form>
                <div className='final_step'>
                    <h5>Thank you for <span>Patronizing Us</span></h5>
                    <p>Make choices that best work for you</p>
                    <div className='get_call'>
                        <img className='final_step_icons' src={process.env.PUBLIC_URL + "/assets/icons/icon/call_icon.svg"} />
                        <h3>Get Quote</h3>
                        <img src={process.env.PUBLIC_URL + "/assets/icons/icon/arrow_right.svg"} />
                    </div>
                    <div className='get_call' style={{"marginTop":"20px"}}>
                        <img className='final_step_icons' src={process.env.PUBLIC_URL + "/assets/icons/icon/quote_icon.svg"}/>
                        <h3>Book A Call</h3>
                        <img className='arrow' src={process.env.PUBLIC_URL + "/assets/icons/icon/arrow_right.svg"} />
                    </div>
                </div>
                <div className='final_img'>
                    <img src={process.env.PUBLIC_URL + "/assets/icons/icon/final_img.svg"} />
                    <div className='hh'>
                        <h4><span><img src={process.env.PUBLIC_URL + "/assets/icons/icon/final_checkbox.svg"} /></span>all done</h4>
                        <p>Check Your <span>Email</span> for follow up</p>
                        <p>See yaa!!! soon</p>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
