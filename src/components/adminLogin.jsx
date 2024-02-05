import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AdminLogin() {
    const navigate = useNavigate(); // Get the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Your form submission logic
            // For now, just redirect to AdminDashboard
            navigate('/admin-dashboard');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Container className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='w-50 p-3 border m-5'>
                <h1>Admin Login</h1>
                <br></br>
                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter email"
                        required="required"
                        name="email"
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        required="required"
                        placeholder="enter password"
                        name="password"
                    />
                </div>

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            required="required"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                </div>
            </form>
        </Container>
    );
}

export default AdminLogin;
