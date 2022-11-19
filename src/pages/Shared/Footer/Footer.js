import React from 'react';
import logo from "../../../Images/logo.png";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-dark text-primary-content mt-5">
            <div>
                <img src={logo} alt="" />
                <p className="font-bold">
                    Onnorokom Pathshala.
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;