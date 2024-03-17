import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Description.css'; 

function Description() {
  return (
    <div className="description-container">
      <h2>About Startup</h2>
      <div className="description-content">
        <p>
          This startup, named TechHub, is dedicated to developing cutting-edge technologies that address real-world challenges. Our team of experts combines innovation with practicality to create solutions that improve lives and enhance experiences.
        </p>
        <p>
          At TechHub, we believe in the power of technology to transform industries and drive positive change. Whether it's developing AI-powered applications or designing sustainable solutions, we are committed to pushing the boundaries of what's possible.
        </p>
        <p>
          With a focus on user-centric design and continuous improvement, we strive to deliver products and services that exceed expectations. Our dedication to excellence and passion for innovation sets us apart in the ever-evolving tech landscape.
        </p>
      </div>

      {/* <div className="info-graphics">
        <div className="info-graphic-item">
          <img src="/images/innovation.png" alt="Innovation" />
          <p>Innovation</p>
        </div>
        <div className="info-graphic-item">
          <img src="/images/collaboration.png" alt="Collaboration" />
          <p>Collaboration</p>
        </div>
        <div className="info-graphic-item">
          <img src="/images/impact.png" alt="Impact" />
          <p>Impact</p>
        </div>
      </div> */}

      <div className="button-container">
        <Link to="/Predict">
          <Button variant="dark" size="sm">
            Predict Analytics
          </Button>
        </Link>
        
        <Button variant="secondary" size="sm">
          Got Questions?
        </Button>
      </div>
    </div>
  );
}

export default Description;
