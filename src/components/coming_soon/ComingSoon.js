import React, { Fragment } from 'react'
import Countdown from 'react-countdown'
import { Helmet } from 'react-helmet'
import Renderer from '../../utilities/countdown/Renderer'
import { ReactSVG } from "react-svg";
import './coming-soon.scss'

export const ComingSoon = () => {
    return (
        <Fragment>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <style>
                    {`
                    @font-face {
                    font-family: "NeuzeitGroW01";
                    font-weight: bold;
                    font-style: normal;

                    src: url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.eot"});
                    src: url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.eot?#iefix"})
                    format("embedded-opentype"),
                    url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.woff2"})
                    format("woff2"),
                    url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.woff"}) format("woff"),
                    url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.ttf"})
                    format("truetype"),
                    url(${process.env.PUBLIC_URL +
                        "/assets/fonts/NeuzeitGroW01-Bold/NeuzeitGroW01-Bold.svg#NeuzeitGroW01-Bold"})
                    format("svg");
                    }
                
                `}
                </style>
            </Helmet>
            <div className="img-bg" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL +
                    "/assets/img/backgrounds/coming-soon-03.jpg"})`
            }}>
                <header className="space-pt-30 space-pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <div >
                                    <img src={
                                        process.env.PUBLIC_URL + "/assets/img/logo/logo.svg"
                                    }

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 space-mt--50">
                                <h2 className="content__title">
                                    <span>Hi</span> Guys! <br /> We are coming soon...
                                </h2>

                                <div className="space-mt--50 countdown">

                                    <Countdown
                                        date={new Date("January 02, 2022 12:00:00")}
                                        renderer={Renderer}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer space-pt--50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <div className="copyright">
                                    &copy; {new Date().getFullYear() + " "}
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Tricuib</a>, all rights reserved
                                </div> */}
                            </div>
                            {/* <div className="col-12 col-md-6">
                                <ul className="cs-03-social-icons d-flex align-items-center justify-content-center justify-content-md-end">
                                    <li>
                                        <a
                                            href="http://www.facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ReactSVG
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/assets/img/icons/facebook-03.svg"
                                                }
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://www.twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ReactSVG
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/assets/img/icons/twitter-03.svg"
                                                }
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://www.instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ReactSVG
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/assets/img/icons/instagram-03.svg"
                                                }
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://www.linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ReactSVG
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/assets/img/icons/linkedin-03.svg"
                                                }
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="http://www.youtube.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ReactSVG
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    "/assets/img/icons/youtube-03.svg"
                                                }
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>
    )
}
