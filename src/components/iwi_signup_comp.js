import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

class Iwi_signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      userType: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        userType: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: '', // Clear the error when the user starts typing again
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, userType, password, confirmPassword } = this.state;
    const errors = {};
    const { navigate } = this.props;
    // Perform validation
    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!userType) {
      errors.userType = 'User type is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password and Confirm Password do not match';
    }

    // Update the state with errors
    this.setState({ errors });

    // If there are no errors, use the navigate function to redirect to sign-in page
    if (Object.values(errors).every((error) => !error)) {
      navigate('/sign-in');
    }
  };

  render() {
    return (
      <SignUpForm
        onSubmit={(e) => this.handleSubmit(e, this.props.navigate)}
        onChange={this.handleChange}
        state={this.state}
      />
    );
  }
}

const SignUpForm = ({ onSubmit, onChange, state }) => {
  const navigate = useNavigate();
  const { username, email, userType, password, confirmPassword, errors } = state;

  return (
    <form onSubmit={(e) => onSubmit(e, navigate)}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={onChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={onChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div className="mb-3">
        <label>Select User</label>
        <select
          className="form-control"
          aria-label="Default select example"
          name="userType"
          value={userType}
          onChange={onChange}
        >
          <option value="" disabled defaultValue>
            Select a user
          </option>
          <option value="entreprenuer">Entrepreneur</option>
          <option value="investor">Investor</option>
        </select>
        {errors.userType && <p style={{ color: 'red' }}>{errors.userType}</p>}
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter again password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
        )}
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

//export default Iwi_signup;
export default (props) => {
  const navigate = useNavigate();
  return <Iwi_signup {...props} navigate={navigate} />;
};