import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Register() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("${process.env.REACT_APP_API_BASE_URL}/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });

        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        else {
            localStorage.setItem("authToken", json.authToken)
            navigate("/");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };
    return (
        <div>
            <Navbar/>
            <section style={{ backgroundColor: '#9A616D' }}>
                <div className="container py-3 px-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form"
                                            className="img-fluid"
                                            style={{ borderRadius: '1rem 0 0 1rem' }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                    <span className="h1 fw-bold mb-0">Student Portal</span>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                                    Create an account
                                                </h5>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder='E.g. Aditya Anand'
                                                        name="name"
                                                        value={credentials.name}
                                                        onChange={onChange} />
                                                    <label className="form-label" htmlFor="form2Example17">
                                                        Name
                                                    </label>

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg " placeholder='E.g. abc@domain.com'
                                                        name="email"
                                                        value={credentials.email}
                                                        onChange={onChange} />
                                                    <label className="form-label" htmlFor="form2Example17">
                                                        Email address
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg"
                                                        name="password"
                                                        value={credentials.password}
                                                        onChange={onChange} />
                                                    <label className="form-label" htmlFor="form2Example27">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={handleSubmit}>
                                                        Register
                                                    </button>
                                                </div>
                                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                                    Already have an account? <Link to="/login" style={{ color: '#393f81' }}>Login your account</Link>
                                                </p>
                                                <Link to="/" className="small text-muted">
                                                    Terms of use.
                                                </Link>
                                                <Link to="/" className="small text-muted">
                                                    Privacy policy
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
