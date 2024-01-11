import React, { Component } from 'react';
import { Container } from 'react-bootstrap';





function Signup() {
    return (
        // <form onSubmit={this.handleSubmit}>
        <Container className='d-flex justify-content-center'>
            <form className='w-50 p-3 border m-5'>
                <h3>Signup</h3>

                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="Name"
                        className="form-control"
                        placeholder="full name"
                        required="required"
                        name="Name"
                    //  onChange={this.handleChange}
                    />
                    {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
                </div>

                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter email"
                        name="email"
                        required="required"
                    //  onChange={this.handleChange}
                    />
                    {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
                </div>

                <div className="mb-3">
                    <label>Contact No:</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="contact number"
                        required="required"
                        name="Contact"
                        />
                        </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="enter password"
                        required="required"
                        name="password"
                    // onChange={this.handleChange}
                    />
                    {/* {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} */}
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                </div>
                <div className="d-grid">
                    <p className="forgot-password text-right">
                        Already a member <a href="/login">Sign in here</a>
                    </p>
                  
                </div>

                
    

            </form>
        </Container>    
    );

}

export default Signup;