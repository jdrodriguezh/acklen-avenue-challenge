import React from "react";
import CustomNavbar from "../components/CustomNavbar";
const Landing = (props) => {
  const { history } = props;
  console.log(props);
  return (
    <>
      <CustomNavbar history={history} />
      <h1>Landing</h1>
    </>
  );
};

export default Landing;
