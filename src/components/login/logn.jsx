import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";




function LoginPage() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userType = e.target.userType.value;
    
        if (userType === 'entreprenuer') {
            navigate('/register');
        } else if (userType === 'investor') {
            navigate('/invest');
        } 
        else {
            alert('Please select a user type');
    };
    };
    return (
    
        <Container className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='w-50 p-3 border m-5'>
                <h3>Login</h3>

                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="enter email"
                        required="required" 
                        name="email"
                    //  onChange={this.handleChange}
                    />
                    {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        required="required"
                        placeholder="enter password"
                        name="password"
                    // onChange={this.handleChange}
                    />
                    {/* {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} */}
                </div>

                <div
                    className="mb-3"
                //   onChange={(e) => this.setState({ userType: e.target.value })}
                >
                    <label>Select User</label>
                    <select
                        className="form-control"
                        aria-label="Default select example"
                        name="userType"
                    >
                        <option disabled selected>
                            Select a user
                        </option>
                        
                        <option value="entreprenuer">Entreprenuer</option>
                        <option value="investor">Investor</option>
                    </select>
                    {/* {errors.userType && <p style={{ color: 'red' }}>{errors.userType}</p>} */}
                </div>

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            
                        //   onChange={this.handleCheckboxChange}
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-dark">
                    {/* onClick={()=>{history.push ("/DataForm")}} */}
                        Login 
                    </button>
                </div>
                <div className="d-grid">
                    <p className="forgot-password text-right">
                        Not a member? <a href="/Signup">Sign Up here</a>
                    </p>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </Container>    
    );

}

export default LoginPage;