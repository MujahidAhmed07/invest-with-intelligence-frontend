import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/iwi_login_comp'
import SignUp from './components/iwi_signup_comp'

import Iwi_investor_dash_com from './components/iwi_investor_dash_com'
import Iwi_entrepreur_dash_comp from './components/iwi_entrepreur_dash_comp'

import Iwi_adminlogin_comp from './components/iwi_adminlogin_comp'
import Iwi_admin_dash_comp from './scenes/dashboard/iwi_admin_dash_comp'


function App() {
  return (
    <Router>
      <div className="App">
        {<nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Invest with Intelligence
            </Link>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item" id='admin_login'>
                  <Link className="nav-link" to={'/admin-login'}>
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> }

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/admin-login" element={<Iwi_adminlogin_comp />} />
              <Route path="/iwi-admin-dash-comp" element={<Iwi_admin_dash_comp />} />
              <Route path="/iwi-investor-dash-com" element={<Iwi_investor_dash_com />} />
              <Route path="/iwi-entrepreur-dash-comp" element={<Iwi_entrepreur_dash_comp />} />
            </Routes>

          </div>
        </div>
      </div>

    </Router>

  )
}

export default App
