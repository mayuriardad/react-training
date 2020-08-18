import React from "react";

const Greet = (props) => {
  // let name = props.name;
  // let surname = props.surname;
  let propsObj = { ...props };
  return <h1>Hello {`${propsObj.name} ${propsObj.surname}`}</h1>;
};

export default Greet;
