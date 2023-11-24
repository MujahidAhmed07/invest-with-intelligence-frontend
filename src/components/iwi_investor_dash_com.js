import React, { Component } from 'react';


class Iwi_investor_dash_com extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#user-info">
                                        User Information
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#startups">
                                        Startups
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Main content */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* User Information Tab */}
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="user-info"
                                role="tabpanel"
                                aria-labelledby="user-info-tab"
                            >
                                <h2>User Information</h2>
                                {/* Add user information components here */}
                            </div>
                        </div>

                        {/* Startups Tab */}
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade"
                                id="startups"
                                role="tabpanel"
                                aria-labelledby="startups-tab"
                            >
                                <h2>Startups</h2>
                                {/* Add startups components here */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Iwi_investor_dash_com;
