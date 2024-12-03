import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../config';
import './Login.css';

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
        <div className="login_div">
            <h1>Log In</h1>
            <p>Are you a new member? <Link to={"/Sign_Up"}>Sign Up</Link></p>
            <form method="POST" onSubmit={login}>
                <fieldset id="form">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                </fieldset>
                <fieldset id="submit">
                    <input type="submit" value="Submit" id="submit-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </fieldset>
            </form>
            </div>

    )
};

export default Login;