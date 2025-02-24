import React from "react";
import classes from './Landing_Page.module.css';

const Landing_Page = () => {
    return (
        <main className={classes.land_main}>
            <div>
                <h1 className={classes.land_h1}>Your Health</h1>
                <h1 className={`${classes.land_h1} ${classes.gradient}`}>Our Responsibility</h1>
            </div>
            <div className={classes.body_text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!</p>
                <button className={classes.land_button}>Get Started</button>
            </div>
        </main>
    )
}

export default Landing_Page;
