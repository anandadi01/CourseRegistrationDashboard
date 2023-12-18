import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function () {
    const navigate = useNavigate();
    // const [verified, setVerified] = useState(false);
    const handleLogin = () => {
        navigate('/login');
    };
    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogout = async (e) => {
        const response = await fetch("http://localhost:5000/api/logout", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json()
        console.log(json);

        localStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <div>
            <style>{`body { margin-top: -40px; }`}</style>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <div>
                            {localStorage.getItem('authToken') ? (

                                <li class="nav-item">
                                    <Link class="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                            ) : (
                                <div></div>
                            )
                            }
                        </div>

                    </ul>

                    <div>
                        {localStorage.getItem('authToken') ? (
                            <button className="btn btn-danger " onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <div>
                                <button className="btn btn-primary mx-2" onClick={handleLogin}>Login</button>
                                <button className="btn btn-success" onClick={handleRegister}>Signup</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}
