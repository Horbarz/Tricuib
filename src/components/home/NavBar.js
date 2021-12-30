import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navBar.scss"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ color: "white" }}>
            <div className="container">

                <a className="navbar-brand" href="#"><img className="logo" src={
                    process.env.PUBLIC_URL + "/assets/img/logo/logo.svg"
                } alt="..logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "grey" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mr-auto">
                        <li id="nav-border" className="nav-item active">
                            <a className="nav-link" href="#">Copywriting</a>
                        </li>
                        <li id="nav-border" className="nav-item">
                            <a className="nav-link" href="#">Web Design</a>
                        </li>
                        <li id="nav-border" className="nav-item" >
                            <a className="nav-link" href="#">Development</a>
                        </li>
                        <li id="nav-border" className="nav-item">
                            <a className="nav-link" href="#">Clients &amp; Tes</a>
                        </li>
                        <li id="free" className="nav-item">
                            <a className="nav-link" href="#">Freebie</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
