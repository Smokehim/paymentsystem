import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowDown, faArrowUpRightFromSquare, faBell, faCircleQuestion, faClock, faClockRotateLeft, faDatabase, faDollarSign, faEye, faFileInvoice, faHome, faInbox, faLightbulb, faMoneyBills, faMoneyBillTransfer, faQrcode, faShareNodes, faUser, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import Img2 from "./picture/portrait-3292287_1920.jpg";
import  Navbar from './navbar.tsx'
export default function Wallet() {
    return(
        <div className="layout">
            <header>
                <Navbar/>
            </header>
                            <main className="d-flex flex-column justify-content-center p-2">
                                <section className="d-flex justify-content-center border border-3 rounded-3 shadow p-2 ">
                                    <div className="d-flex flex-column justify-content-between align-baseline">
                                    <p>jason mwamba</p>
                                    <div className="d-flex flex-column justify-content-center align-items-center p-0 gap-0">
                                        <p>Balance</p>
                                        <p>$24,000.00</p>
                                    </div>
                                    <p>vitual amount</p>
                                    </div>
                                </section>
                                <section className="d-flex justify-content-center p-3 gap-4 ">
                                    <button className="btn btn-secondary  border-4  rounded-2 gap-2 d-flex justify-content-baseline"><FontAwesomeIcon className="p-2 border-4 rounded-2 bg-success" icon={faArrowUpRightFromSquare}/> Send</button>
                                    <button className="btn btn-secondary  border-4 rounded-2 gap-2 d-flex justify-content-baseline "><FontAwesomeIcon className="p-2 border-4 rounded-2 bg-success" icon={faArrowDown}/> Send</button>
                                </section>
                                <section className="d-flex justify-content-around">
                                    <p className="fs-2 ">Today</p>
                                </section>
                                <section className="border border-3 rounded-3 shadow p-4">
                                    <div className="d-flex justify-content-around align-items-baseline">
                                        <div className="d-flex flex-column">
                                            <p className="d-flex justify-content-center  gap-1"><FontAwesomeIcon className="p-2 border-4 rounded-2 bg-success" icon={faArrowUpRightFromSquare}/> Received</p>
                                            <p>KW1000.00</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                        <p>mwamba</p>
                                        <p>$100.00</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-baseline">
                                        <div className="d-flex flex-column">
                                            <p className="d-flex justify-content-center  gap-1"><FontAwesomeIcon className="p-2 border-4 rounded-2 bg-success" icon={faArrowUpRightFromSquare}/> Received</p>
                                            <p>KW1000.00</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                        <p>mwamba</p>
                                        <p>$100.00</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-baseline">
                                        <div className="d-flex flex-column">
                                            <p className="d-flex justify-content-center  gap-1"><FontAwesomeIcon className="p-2 border-4 rounded-2 bg-success" icon={faArrowUpRightFromSquare}/> Received</p>
                                            <p>KW1000.00</p>
                                        </div>
                                        <div className="d-flex flex-column">
                                        <p>mwamba</p>
                                        <p>$100.00</p>
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