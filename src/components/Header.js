'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';

import Logo from '../../public/images/tri-logo.png';

import { IconContext } from 'react-icons';

import { MdEmail, MdLocalPhone } from "react-icons/md";

function Header() {
    const isBigScreen = useMediaQuery({ minWidth: 1224 });

    const [show, setShow] = useState(false);

    return (
        <div>
            {/* phone call and email section with black background and white letters */}
            <div className='contact-icons'
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center", 
                    alignItems: "center",
                    gap: 24, 
                    backgroundColor:"#800000",
                }}
            >
                <a
                    href="mailto:trifinancialservices@gmail.com"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        textDecoration: "none",
                        color: "white",
                        fontSize: 20,
                    }}
                >
                    <MdEmail />
                    Email
                </a>

                <a
                    href="tel:+14108804680"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        textDecoration: "none",
                        color: "white",
                        fontSize: 20,
                    }}
                >
                    <MdLocalPhone />
                    Call
                </a>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <a href='/'>
                    <Image className='logo' src={Logo} alt="TRI Financial Services" /></a>
                {isBigScreen ? (

                    <ul className='main-menu'>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/">TRI Financial Services</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/about-tri">About TRI</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/services">Services</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/videos">Videos</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/contact-tri">Contact TRI</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href="/join-our-team">Join Our Team</a></li>
                        <li style={{ display: "inline-block" }} className='px-3'><a href='https://reneeilesanmi.myhomehq.biz/newsletters' target='_blank'>Newsletter</a></li>
                    </ul>
                ) : (
                    <div>
                        <Navbar expand="lg">
                            <Navbar.Toggle />

                            <Navbar.Offcanvas>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Menu</Offcanvas.Title>
                                </Offcanvas.Header>

                                <Offcanvas.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="/" style={{ color: "#800000" }}>
                                            TRI Financial Services
                                        </Nav.Link>

                                        <Nav.Link href="/about-tri" style={{ color: "#800000" }}>
                                            About TRI
                                        </Nav.Link>

                                        <Nav.Link href="/services" style={{ color: "#800000" }}>
                                            Services
                                        </Nav.Link>

                                        <Nav.Link href="/videos" style={{ color: "#800000" }}>
                                            Videos
                                        </Nav.Link>

                                        <Nav.Link href="/contact-tri" style={{ color: "#800000" }}>
                                            Contact TRI
                                        </Nav.Link>

                                        <Nav.Link href="/join-our-team" style={{ color: "#800000" }}>
                                            Join Our Team
                                        </Nav.Link>

                                        <Nav.Link
                                            href="https://reneeilesanmi.myhomehq.biz/newsletters"
                                            target="_blank"
                                            style={{ color: "#800000" }}
                                        >
                                            Newsletter
                                        </Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar>

                    </div>
                )}
            </div>

        </div>
    )
}

export default Header