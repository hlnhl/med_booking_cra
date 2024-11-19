import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="login_div">
            <h1>Log In</h1>
            <p>Are you a new member? <a href="signup.html">Sign Up</a></p>
            <form>
                <fieldset id="form">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required="" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required="" />
                </fieldset>
                <fieldset id="submit">
                    <input type="submit" value="Submit" id="submit-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </fieldset>
            </form>
            </div>

    )
}

export default Login;