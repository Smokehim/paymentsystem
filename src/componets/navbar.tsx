import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faCircleQuestion, faClock, faClockRotateLeft, faDatabase, faDollarSign, faEye, faFileInvoice, faHome, faInbox, faLightbulb, faMoneyBills, faMoneyBillTransfer, faQrcode, faShareNodes, faUser, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

export default function Navbar(){
    const [active, Activat] = useState(false)
        function HandleClicks(){
                Activat(true)
        }
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                     <div className="container-fluid">
                             <a className="navbar-brand" href="#">MyPayment</a>
                                <NavLink to="/help" className="nav-link"><FontAwesomeIcon icon={faBell}/></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" onClick={HandleClicks}></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Send</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Wallet</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Activity</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Help</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                {
                                        active?<ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Send</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Wallet</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Activity</NavLink>
                                        </li>
                                        <li className="nav-item">
                                                <NavLink to="/send" className="nav-link">Help</NavLink>
                                        </li>
                                    </ul> : null
                                }
                                </div>
                                
                         </div>
                    </nav>
    )
}