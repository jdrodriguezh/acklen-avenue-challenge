import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import "../assets/Collection.css";
import items from "./Items";

const Collection = () => {
  return (
    <>
      <CustomNavbar />
      <Container className="main-container" fluid>
        <Container className="inner-container" fluid>
          <div className="first-line">
            <h1>Collection 1 <Button variant="success">Add entry</Button></h1>
          </div>
          <h3>Aliqua culpa laborum incididunt dolore deserunt consequat eiusmod.</h3>
          <br/>
          <Table className="table-style" responsive>
            <thead>
              <tr>
                <th>Heading 1</th>
                <th>Heading 2</th>
                <th>Heading 3</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => {
                return(
                  <tr>
                    <td>{item.h1}</td>
                    <td>{item.h2}</td>
                    <td>{item.h3}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Collection;
