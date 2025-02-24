import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../config';
import classes from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
          navigate("/");
        }
    }, []);

    // Function to handle form submission
    const login = async (e) => {
        e.preventDefault(); // prevent default form submission

        // POST request to API to log in user
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("email", json.theUser.email);
            sessionStorage.setItem("name", json.theUser.name);
            sessionStorage.setItem("role", json.theUser.role);
            sessionStorage.setItem("phone", json.theUser.phone);

            // Redirect user to home page
            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messges
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className={classes.login_div}>
            <h1 className={classes.login_h1}>Log In</h1>
            <p className={classes.login_p}>Are you a new member? <Link className={classes.login_a} to={"/Sign_Up"}>Sign Up</Link></p>
            <form className={classes.login_form} method="POST" onSubmit={login}>
                <fieldset className={classes.login_fieldset}>
                    <label className={classes.login_label} htmlFor="email">Email</label>
                    <input className={classes.login_input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                    <label className={classes.login_label} htmlFor="password">Password</label>
                    <input className={classes.login_input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                    <input type="submit" value="Submit" className={classes.login_submit_btn} />
                    <input type="reset" value="Reset" className={classes.login_reset_btn} />
                </fieldset>
            </form>
        </div>

    )
};

export default Login;