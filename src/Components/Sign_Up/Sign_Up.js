import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [role, setRole] = useState('Patient');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="signup_div">
            <h1>Sign Up</h1>
            <p>Already a member? <Link to={"/Login"}>Log In</Link></p>

            <form method="POST" onSubmit={register}>
                <fieldset>
                    <label htmlFor="role">Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} id="role" name="role" required="">
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required="" />
                    
                    <label htmlFor="phone">Phone number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" required="" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required="" />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required="" />
                
                    <input type="submit" value="Submit" id="submit-btn" />
                    <input type="reset" value="Reset" id="reset-btn" />
                </fieldset>
            </form>
        </div>

    );
};

export default Sign_Up;