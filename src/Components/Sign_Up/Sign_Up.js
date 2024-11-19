import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    // const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const register = async(e) => {
        e.preventDefault(); // prevent default form submission

        // API call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
            },
            body: JSON.stringify({
                // role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            // sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.relaod();
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
        <div className="signup_div">
            <h1>Sign Up</h1>
            <p>Already a member? <a href="login.html">Log In</a></p>

            <form method="POST" onSubmit={register}>
                <fieldset id="form">
                    <label htmlFor="role">Role</label>
                    <select /* value={role} onChange={(e) => setRole(e.target.value)} */ id="role" name="role" required="">
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                    
                    <label htmlFor="phone">Phone number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phonenumber" id="phone" name="phone" required="" pattern="[1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]"/>
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

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
}

export default Sign_Up;