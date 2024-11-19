import React from "react";
import { Link } from "react-router-dom";
import './Landing_Page.css';

const Landing_Page = () => {
    return (
        <main>
            <div className="heading">
                <h1 className="line1">Your Health</h1>
                <h1 className="line2">Our Responsibility</h1>
            </div>
            <div className="body-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!</p>
                <button className="get-started">Get Started</button>
            </div>
        </main>
    )
}

export default Landing_Page;
