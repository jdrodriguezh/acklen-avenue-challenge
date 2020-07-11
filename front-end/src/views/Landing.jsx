import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import diamond from "../assets/images/diamond.svg";
import treasure from "../assets/images/treasure.svg";
import coins from "../assets/images/money.svg";
import storage from "../assets/images/factory.svg";
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
              <div className="image-container2">
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
            <Col lg={4} md={4} xs={12} className="col-style2">
              <div className="image-container3">
                <div className="treasure-image">
                  <img src={treasure} alt="" />
                </div>
              </div>
              <h3>
                Keep record of your collections with us. We'll keep all the information related to
                them.
              </h3>
            </Col>
            <Col lg={4} md={4} xs={12} className="col-style2">
              <div className="image-container3">
                <div className="treasure-image">
                  <img src={coins} alt="" />
                </div>
              </div>
              <h3>
                You can keep records of the value of the item, the location where you found it, the
                year it was made and its condition.
              </h3>
            </Col>
            <Col lg={4} md={4} xs={12} className="col-style2">
              <div className="image-container3">
                <div className="treasure-image">
                  <img src={storage} alt="" />
                </div>
              </div>
              <h3>
                There´s no limit to the number of collections or items you can have! Create as many as you like!
              </h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Landing;
