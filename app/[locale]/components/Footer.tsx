import React from 'react';
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations()
    return (
        <div style={{"background": "#0D1724", "color": "#fff"}}>
            <div className="container mx-auto">
                <div className="custom-container flex flex-col items-center">
                    <h3 className="header-title">Subscribe to analytics</h3>
                    <div className="w-full text-center">
                        <input type="email" className="input-standard f-18 footer-input" placeholder="Write your email"/>
                    </div>
                    <a href="#" className="uppercase white-btn-mid f-18 "> {t('submit email')} </a>
                    <div className="inline-grid grid-cols-5 w-full footer-blocks">
                        <div className="footer-block">
                            <p>Product</p>
                            <div className="footer-link-block f-18 flex flex-col">
                                <a href="#">Product</a>
                                <a href="#">How it works</a>
                                <a href="#">Pricing</a>
                            </div>
                        </div>
                        <div className="footer-block">
                            <p>Company</p>
                            <div className="footer-link-block f-18 flex flex-col">
                                <a href="#">About us</a>
                                <a href="#">Legend</a>
                                <a href="#">Career</a>
                                <a href="#">Contacts</a>
                            </div>
                        </div>
                        <div className="footer-block">
                            <p>Recourses</p>
                            <div className="footer-link-block f-18 flex flex-col">
                                <a href="#">Data center</a>
                                <a href="#">Help center</a>
                            </div>
                        </div>
                        <div className="footer-block">
                            <p>Legal</p>
                            <div className="footer-link-block f-18 flex flex-col">
                                <a href="#">Terms of Service</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Cookies Policy</a>
                            </div>
                        </div>
                        <div className="footer-block">
                            <p>Social media</p>
                            <div className="footer-link-block flex w-full justify-between footer-social">
                                <a href="#">
                                    <FaYoutube />
                                </a>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <PiInstagramLogoFill />
                                </a>
                                <a href="#">
                                    <RiTwitterXFill />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full footer-last-section">
                        <p className="f-18">© 2023. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
