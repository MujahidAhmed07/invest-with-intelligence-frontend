import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <label>Select User</label>
          <select className="form-control" aria-label="Default select example">
            <option value="" disabled selected>select user</option>
            <option value="entreprenuer">Entreprenuer</option>
            <option value="investor">Investor</option>
          </select>
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
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
    )
  }
}
