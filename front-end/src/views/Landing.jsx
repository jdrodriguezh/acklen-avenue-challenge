import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import diamond from "../assets/images/diamond.svg";
import treasure from "../assets/images/treasure.svg";
import coins from "../assets/images/money.svg";
import storage from "../assets/images/factory.svg";
import programmer from "../assets/images/programmer.svg"
import "../assets/Landing.css";

const Landing = (props) => {
  const { history } = props;
  console.log(props);
  return (
    <>
      <CustomNavbar history={history} />
      <Container className="main-container" fluid>
        <Container className="inner-container" fluid>
          <Row>
            <Col lg={12} xs={12} className="col-style add-spacing">
              <div className="first-row-image-container">
                <div className="diamond-image">
                  <img src={diamond} alt="" />
                </div>
              </div>
              <div className="landing-title">
                <h1>Welcome to Treasure Keeper!</h1>
              </div>
            </Col>
          </Row>
          <Row className="separate-top">
            <Col lg={4} md={4} xs={12} className="second-row-col-style">
              <div className="second-row-image-container">
                <div className="treasure-image">
                  <img src={treasure} alt="" />
                </div>
              </div>
              <h3>
                Keep record of your collections with us. We'll keep all the information related to
                them.
              </h3>
            </Col>
            <Col lg={4} md={4} xs={12} className="second-row-col-style">
              <div className="second-row-image-container">
                <div className="treasure-image">
                  <img src={coins} alt="" />
                </div>
              </div>
              <h3>
                Store information such as the value of the item, the location where you found it, the
                year it was made and its condition.
              </h3>
            </Col>
            <Col lg={4} md={4} xs={12} className="second-row-col-style">
              <div className="second-row-image-container">
                <div className="treasure-image">
                  <img src={storage} alt="" />
                </div>
              </div>
              <h3>
                There´s no limit to the number of collections or items you can have! Create as many as you like!
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={12} className="col-style add-spacing">
              <div className="third-row-image-container">
                <div className="programmer-image">
                  <img src={programmer} alt="" />
                </div>
              </div>
              <div className="about">
                <h2>Treasure Keeper was developed by Josué Rodríguez as part of the Acklen Avenue's Challenge. It was developed using MERN stack and Auth0 authentication. The idea was #38 of the list of projects specified on the guidelines.</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Landing;
