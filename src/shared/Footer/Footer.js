import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-24 bg-black text-gray-300">
            <div>
                <img src={logo} alt="" />
                <p>Car Doctor Ltd.<br />Providing reliable service since 2001.</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <a href='/' className="link link-hover">Home</a>
                <a href='/' className="link link-hover">Service</a>
                <a href='/' className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">Why Car Doctor</a>
                <a href='/' className="link link-hover">About</a>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <a href='/' className="link link-hover">Support Center</a>
                <a href='/' className="link link-hover">Feedback</a>
                <a href='/' className="link link-hover">Accesibility</a>
            </div>
        </footer>
    );
};

export default Footer;