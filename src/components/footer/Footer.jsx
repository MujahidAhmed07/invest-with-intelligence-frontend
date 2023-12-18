import React from "react";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className} bg-dark text-white`}>
      <div className="group">
        <div className="div">
          <div className="group-2">
            <div className="text-wrapper">About us</div>
            <div className="what-we-do-teams">
              What we do
              <br />
              Teams
              <br />
              Careers
              <br />
              Security
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-3">
              <div className="text-wrapper-2">Investors</div>
              <p className="how-to-invest">
                How to Invest
                <br />
                Predictions <br />
                Success Stories
                <br />
                Trending Startups
                <br />
                Our Predictions
                <br />
                Security
              </p>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="group-4">
              <div className="group-5">
                <div className="text-wrapper-2">Startups</div>
                <div className="investors-how-to-get">
                  Investors
                  <br />
                  How to get funded
                  <br />
                  Revenues
                  <br />
                  Guides
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <h4>Invest with <br/>Intelligence</h4>
      </div>
    </div>
  );
};
