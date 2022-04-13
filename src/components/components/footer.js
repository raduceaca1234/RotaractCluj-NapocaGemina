import React from 'react';
import { Link } from '@reach/router';
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';

const footer = () => (
    <footer className="footer-light">
        {/* <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Community</h5>
                        <ul>
                            <li><Link to="">Discord</Link></li>
                            <li><Link to="">Twitter</Link></li>
                            <li><Link to="">Facebook</Link></li>
                            <li><Link to="">Organization</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Resources</h5>
                        <ul>
                            <li><Link to="">Collection</Link></li>
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">Partners</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Community</h5>
                        <ul>
                            <li><Link to="">Community</Link></li>
                            <li><Link to="">Documentation</Link></li>
                            <li><Link to="">Brand Assets</Link></li>
                            <li><Link to="">Blog</Link></li>
                            <li><Link to="">Forum</Link></li>
                            <li><Link to="">Mailing List</Link></li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div> */}
        <div className="subfooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex">
                            <div className="de-flex-col">
                                <span onClick={() => window.open("", "_self")}>
                                    <img alt="" className="f-logo d-1" src="./img/logo.png" />
                                    <img alt="" className="f-logo d-3" src="./img/logo-light.png" />
                                    <span className="copy">&copy; Copyright 2022 - Rotaract Cluj-Napoca Gemina</span>
                                </span>
                            </div>
                            <div className="de-flex-col">
                                <div className="social-icons">
                                    <span onClick={() => {
                                        window.location.href = 'https://www.instagram.com/rotaractgemina/';
                                        return null;
                                    }}><i><BsInstagram /></i></span>
                                    <span onClick={() => {
                                        window.location.href = 'https://www.facebook.com/rotaractgemina';
                                        return null;
                                    }}><i><AiFillFacebook /></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
export default footer;