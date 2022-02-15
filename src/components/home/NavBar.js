import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import "./navBar.scss"

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =  useState(true)

    const handleClick = () => {setClick(!click)}
    const closeMobileMenu = () => {setClick(false)}

    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(false)
    }

    useEffect(() => {
        showButton()
    },[])

    return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{ color: "white" }}>
            <div className='navbar-container'>

                <a className="navbar-brand" href="#"><img className="logo" src={
                    process.env.PUBLIC_URL + "/assets/img/logo/logo.png"
                } alt="..logo" /></a>
                {/* <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "grey" }} />
                </button> */}
                <div className="menu-icon" onClick={handleClick}>
                    {
                        click ? <FontAwesomeIcon icon={faTimes} style={{ color: "#FF6803" }} /> :
                                <FontAwesomeIcon icon={faBars} style={{ color: "#FF6803" }} />

                    }
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={click ? 'nav-menu nactive' : 'navbar-nav  mr-auto'}>
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
                            <a className="nav-link free" href="#">Freebie</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
        </>
    )
}

export default NavBar
