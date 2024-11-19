import React from 'react';
import './Sign_Up.css';

const Sign_Up = () => {
    return (
        <div className="signup_div">
            <h1>Sign Up</h1>
            <p>Already a member? <a href="login.html">Log In</a></p>

            <form>
                <fieldset id="form">
                    <label htmlFor="role" required="">Role</label>
                    <select id="role" name="role">
                        <option>Patient</option>
                        <option>Doctor</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required="" />
                    
                    <label htmlFor="phone">Phone number</label>
                    <input type="phonenumber" id="phone" name="phone" required="" pattern="[1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]"/>
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required="" />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required="" />
                </fieldset>

                <fieldset id="submit">
                    <input type="submit" defaultValue="Submit" id="submit-btn" />
                    <input type="reset" defaultValue="Reset" id="reset-btn" />
                </fieldset>
            </form>
        </div>

    )
}

export default Sign_Up;