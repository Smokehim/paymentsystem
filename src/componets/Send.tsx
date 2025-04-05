import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faCircleQuestion, faClock, faClockRotateLeft, faDatabase, faDollarSign, faEye, faFileInvoice, faHome, faInbox, faLightbulb, faMoneyBills, faMoneyBillTransfer, faQrcode, faShareNodes, faUser, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { faApplePay, faCcAmex, faCcMastercard, faCcVisa, faGooglePay, faPaypal } from "@fortawesome/free-brands-svg-icons";
export default function Send() {

    return(
        <div className="layout">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                     <div className="container-fluid">
                             <a className="navbar-brand" href="#">MyPayment</a>
                                <NavLink to="/help" className="nav-link"><FontAwesomeIcon icon={faBell}/></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
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
                         </div>
                    </nav>
                </header>
                <main>
                    <section className="d-flex justify-content-center">
                        <h1 className="text-center">Payment method</h1>
                    </section>
                    <section className="container-fluid">
                        <div className="row gap-3 p-2">
                            <div className="d-flex justify-content-between border border-2 rounded-3 shadow btn p-2">
                                <p>Credit card</p>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faCcAmex} size="2x"/>
                                    <FontAwesomeIcon icon={faCcVisa} size="2x"/>
                                    <FontAwesomeIcon icon={faCcMastercard} size="2x"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border border-2 rounded-3 shadow btn p-2" >
                                <p>PayPal</p>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faPaypal} size="2x"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border border-2 rounded-3 shadow btn p-2">
                                <p>AppPay</p>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faApplePay} size="2x"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border border-2 rounded-3 shadow btn p-2">
                                <p>Google Pay</p>
                                <div className="d-flex">
                                    <FontAwesomeIcon icon={faGooglePay} size="2x"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between border border-2 rounded-3 shadow btn p-2">
                                <p>Mobile Money</p>
                                <div className="d-flex gap-3">
                                    <FontAwesomeIcon icon={faPaypal} size="2x"/>
                                    <FontAwesomeIcon icon={faPaypal} size="2x"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="sticky-bottom">
                    <nav className="d-flex justify-content-around bg-body-tertiary"> 
                        <NavLink to="/send" className="nav-link"><FontAwesomeIcon icon={faHome} size="2x"/></NavLink>
                        <NavLink to="/send" className="nav-link"><FontAwesomeIcon icon={faQrcode} size="2x"/></NavLink>
                        <NavLink to="/send" className="nav-link"><FontAwesomeIcon icon={faUser} size="2x"/></NavLink>
                    </nav>
                </footer>
        </div>
    )
}