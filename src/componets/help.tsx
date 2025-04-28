import React, { useReducer } from "react";
import { useState } from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {  faBell, faCircleQuestion, faClock, faClockRotateLeft, faComputer, faDatabase, faDollarSign, faEye, faFile, faFileInvoice, faHands, faHeadphones, faHome, faInbox, faLightbulb, faMessage, faMoneyBills, faMoneyBillTransfer, faQrcode, faShareNodes, faUser, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
 import { NavLink } from "react-router";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
export default function Help() {
        
    return(
        <div className="layout">
             <header>
                
                </header>
                <main className="gap-3">
                        <section className="d-flex flex-column text-center p-3">
                                <h1 className="fs-1">Help center- Personal Account</h1>
                                <p>Hi jason, How can we help your, so that you help us</p>
                                <div className="input-group  p-5">
                                        <input type="text" className="form-control " style={{height: 60, width: 200}} placeholder="Search for help"/>
                                        <button className="btn btn-primary">Search</button>
                                </div>
                        </section>
                        <section className="container-fluid rounded-3  border-2 shadow-lg p-2">
                                <h1 className="text-center">Common question  for you</h1>
                        <div className="row ">
                                <div className="col-4">
                                        <div className="list-group" id="list-tab" role="tablist">
                                                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                        </div>
                                </div>
                                <div className="col-8">
                                        <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section className="container-fluid rounded-3 p-2 border-4 shadow-lg">
                                <h1 className="text-center">For Jason</h1>
                                <div className="row">
                                <div className="col-4">
                                        <div className="list-group" id="list-tab" role="tablist">
                                                <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a>
                                                <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
                                                <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
                                                <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                                        </div>
                                </div>
                                <div className="col-8">
                                        <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                                                <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                                <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                                <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section className="d-flex flex-column ">
                                <p className="text-center">Payments and transfers</p>
                                <p className="text-center">Disputes</p>
                                <p className="text-center">My account</p>
                                <p className="text-center">My Wallet</p>
                                <p className="text-center">Login & Security</p>
                                <p className="text-center">Seller Tools</p>
                        </section>
                        <section className=" container-fluid d-flex flex-column gap-3 bg-secondary p-3 col-md-12 col-lg-12 col-xl-12">
                                <h1 className="fs-1 text-light text-center bg-secondary col-sm-12">More ways we can help</h1>
                               
                        </section>
                        <section className="bg-secondary">
                                <div className="d-flex flex-column justify-content-center p-5 ">
                                        <p className="text-center">How  are we  doing</p>
                                        <button className="btn bg-dark rounded-4 text-light p-2">Take our survey</button>
                                </div>
                                <div className="row justify-content-center gap-2 p-5">
                                <div className="d-flex justify-content-center border-2 rounded-3 col-sm-12 shadow pt-3 gap-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <FontAwesomeIcon icon={faHands} size="3x"/>
                                        <div className="d-flex flex-column">
                                                <h1>Resolution Center</h1>
                                                <p>Fix transcaction and Account Related issues</p>
                                        </div>
                                </div>
                                <div className="d-flex justify-content-center border-2 rounded-3 shadow pt-3 gap-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <FontAwesomeIcon icon={faFile} size="3x"/>
                                        <div className="d-flex flex-column">
                                                <h1>Tax center</h1>
                                                <p>Get your 1099-K and others tax info here</p>
                                        </div>
                                </div>
                                <div className="d-flex justify-content-center border-2 rounded-3 shadow pt-3 gap-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <FontAwesomeIcon icon={faComputer} size="3x"/>
                                        <div className="d-flex flex-column">
                                                <h1>Technical Help</h1>
                                                <p>Find out how PapPal works for your business</p>
                                        </div>
                                </div>
                                <div className="d-flex justify-content-center border-2 rounded-3 shadow pt-3 gap-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <FontAwesomeIcon icon={faHeadphones} size="3x"/>
                                        <div className="d-flex flex-column">
                                                <h1>Contact Us</h1>
                                                <p>Contact customer service</p>
                                        </div>
                                </div>
                                <div className="d-flex justify-content-center border-2 rounded-3 shadow pt-3 gap-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <FontAwesomeIcon icon={faMessage} size="3x"/>
                                        <div className="d-flex flex-column">
                                                <h1>Message Center</h1>
                                                <p>Send, receive and view you PayPal message</p>
                                        </div>
                                </div>
                                </div>
                        </section>
                        <section className="d-flex flex-column text-center p-3 gap-3">
                               <div className="d-flex flex-column  p-3">
                                <p className=""><FontAwesomeIcon icon={faPaypal} /> PayPal</p>
                                <p>Help</p>
                                <p>Contact US</p>
                                <p>Security</p>
                               </div>
                               <div className="d-flex flex-column  p-2">
                                <div className="d-flex flex-column ">
                                        <p>1999-2025 PayPal, ink. All right rezerved</p>
                                        <p>Privacy</p>
                                        <p>Cookies</p>
                                        <p>Security</p>
                                </div>
                                <p>PayPal pte.Ltd is licensed by the Monetary authority of Singapore as a Major Payment institution under the Payment /servi e Act 2019</p>
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