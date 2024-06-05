import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <nav>
                <h1>PATO PLACE</h1>
                <ul>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <header>
                <h2>Welcome to PATO PLACE</h2>
                <button>Look Menu</button>
            </header>
        </div>
    );
};

export default LandingPage;
