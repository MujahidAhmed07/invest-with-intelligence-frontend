import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Iwi_login_comp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userType: '',
      rememberMe: false,
      errors: {
        email: '',
        password: '',
        userType: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {
        ...this.state.errors,
        [e.target.name]: '', // Clear the error when the user starts typing again
      },
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ rememberMe: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, userType } = this.state;
    const { navigate } = this.props;

    // Validate that both email and password are not empty
    const errors = {};
    if (!email) {
      errors.email = 'Email cannot be empty';
    }
    if (!password) {
      errors.password = 'Password cannot be empty';
    }
    if (!userType) {
      errors.userType = 'Select a user type';
    }

    this.setState({ errors });

    // If there are errors, do not proceed with authentication logic or navigation
    if (
      Object.values(errors).some((error) => error !== '') ||
      userType === ''
    ) {
      return;
    }

    // Add your authentication logic here if needed

    if (userType === 'investor') {
      // Navigate to the investor dashboard
      navigate('/iwi_investor_dash_comp');
    } else if (userType === 'entreprenuer') {
      // Navigate to the entrepreneur dashboard
      navigate('/iwi_entrepreur_dash_comp');
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={this.handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div
          className="mb-3"
          onChange={(e) => this.setState({ userType: e.target.value })}
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
          {errors.userType && <p style={{ color: 'red' }}>{errors.userType}</p>}
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={this.handleCheckboxChange}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        <div className="d-grid">
          <p className="forgot-password text-right">
            Already registered <a href="/sign-up">sign up?</a>
          </p>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  return <Iwi_login_comp {...props} navigate={navigate} />;
};
