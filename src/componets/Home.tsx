import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faCircleQuestion, faClock, faClockRotateLeft, faDatabase, faDollarSign, faEye, faFileInvoice, faHome, faInbox, faLightbulb, faMoneyBills, faMoneyBillTransfer, faQrcode, faShareNodes, faUser, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import Nabar from './navbar.tsx'
import Img2 from "./picture/portrait-3292287_1920.jpg";

export default function Home() {

    return(
        <div className="layout">
            <header>
                <Nabar/>
            </header>
            <main className="p-2 d-flex flex-column justify-content-center gap-2 ">
                <section className="border border-2 shadow rounded-5">
                    <div className="d-flex justify-content-around grid p-2">
                        <div className="d-flex flex-column col-5">
                            <div className="d-flex justify-items-baseline gap-2">
                            <FontAwesomeIcon icon={faWallet}/>
                            <p className="text-center fs-7">your Wallet balance</p>
                            </div>
                            <div className="d-flex  gap-1 justify-items-baseline">
                                <p>$24,562.00</p>
                                <FontAwesomeIcon icon={faEye}/>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faQrcode} className="col-4" size="3x"/>
                    </div>
                    <div className="d-flex justify-content-around grid gap-2 p-1">
                            <div className="d-flex flex-column gap-3 col-2">
                                <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faDollarSign} size="1x" className="border p-2 rounded rounded-circle bg-primary w-30 h-30"/>
                                </div>
                                <p className="text-center">Balance</p>
                            </div>
                            <div className="d-flex flex-column gap-3 col-2">
                                <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faInbox} size="1x" className="border p-2 rounded rounded-circle bg-primary w-30 h-30"/>
                                </div>
                                <p className="text-center">Sent</p>
                            </div>
                            <div className="d-flex flex-column gap-3 col-2">
                                <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faCircleQuestion} size="1x" className="border p-2 rounded rounded-circle bg-primary w-30 h-30"/>
                                </div>
                                <p className="text-center">Recent</p>
                            </div>
                            <div className="d-flex flex-column gap-3 col-2">
                                <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faMoneyBillTransfer} size="1x" className="border p-2 rounded rounded-circle bg-primary w-30 h-30"/>
                                </div>
                                <p className="text-center">Transfer</p>
                            </div>
                            <div className="d-flex flex-column gap-3 col-2">
                                <div className="d-flex justify-content-center">
                                <FontAwesomeIcon icon={faClockRotateLeft} size="1x" className="border p-2 rounded rounded-circle bg-primary w-30 h-30"/>
                                </div>
                                <p className="text-center">History</p>
                            </div>
                    </div>
                </section>
                <section className="p-2 border border-2 shadow rounded-3">
                    <p>Other Service</p>
                    <div className="container-fluid">
                       <div className="row">
                          <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faDatabase} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Create invoice</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faFileInvoice} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Pay Bills</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faMoneyBills} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Back transfer</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faClock} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Saving</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faLightbulb} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Elecricity</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faVideo} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Movies</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faWallet} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Add Money</p>
                           </div>
                           <div className="d-flex flex-column col-3">
                              <FontAwesomeIcon icon={faShareNodes} className="border p-2 border-2 rounded-3 w-25 h-525"/>
                              <p>Share</p>
                           </div>
                        </div> 
                    </div>
                </section>
                <section className="d-flex justify-content-around align-item-baseline p-3">
                    <p className="fs-3">Recent Activity</p>
                    <p>Sell all</p>
                </section>
                <section className="container-fluid p-2">
                    <div className="d-flex flex-column justify-content-center  gap-3">
                        <div className="d-flex justify-content-between p-3 shadow border border-2 rounded-3">
                            <div className="d-flex gap-3">
                                <img src={Img2} style={{width:50, height:50}} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column">
                                    <p>jason mwamba</p>
                                    <p>Sent</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p>$200.00</p>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-3 shadow border border-2 rounded-3">
                            <div className="d-flex gap-3">
                                <img src={Img2} style={{width:50, height:50}} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column">
                                    <p>jason mwamba</p>
                                    <p>Sent</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p>$200.00</p>
                                <p>2 days ago</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between p-3 shadow border border-2 rounded-3">
                            <div className="d-flex gap-3">
                                <img src={Img2} style={{width:50, height:50}} className="rounded-circle" alt="" />
                                <div className="d-flex flex-column">
                                    <p>jason mwamba</p>
                                    <p>Sent</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <p>$200.00</p>
                                <p>2 days ago</p>
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