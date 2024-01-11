import React, { Component ,useState} from 'react';
import { Container } from 'react-bootstrap';


const AdminLogin = () =>  {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful login
                console.log('Login successful');
            } else {
                // Handle failed login
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    return (
        // <form onSubmit={this.handleSubmit}>
        <Container className='d-flex justify-content-center'>
            <form className='w-50 p-3 border m-5'>
                <h3>Admin Login</h3>
                <br></br>
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

                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            required="required"
                        //   onChange={this.handleCheckboxChange}
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

                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </form>
        </Container>    
    );

}

export default AdminLogin;