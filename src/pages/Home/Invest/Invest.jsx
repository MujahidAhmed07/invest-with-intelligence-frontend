import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Startups from "../../../components/card";
import "./Invest.css"; // Import your custom stylesheet

function Invest() {

  return (
    <>
      <Container className="mt-3 mb-3">
        <h1>Invest in Growing Startups</h1>

        <Row className="startups-row mb-3 mt-3">
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
        </Row>

        <Row className="startups-row mb-3 mt-3">
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
        </Row>

        <Row className="startups-row">
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
          <Col className="startups-col">
            <div className="startups-card">
              <Startups />
            </div>
          </Col>
        </Row>
      </Container>
    </>


  );

  
}



export default Invest;
