import React from "react";
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css':
import './Description.css'; 
import{ Link } from 'react-router-dom';

function Description() {
  return (
    <div className="description-container">
      <h2>About Startup</h2>
      <div className="details">
        <h3>Details</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit officiis ex,
          voluptatum adipisci et facilis dolorem, impedit harum quibusdam repellendus placeat
          aliquam iure dolores, illum alias ratione ullam quasi? Beatae! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Earum, voluptas! Commodi, eos quasi adipisci, magnam tempora
          natus sunt harum nam et magni corrupti neque. Similique quibusdam obcaecati eaque dicta officia.
        </p>
      </div>

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