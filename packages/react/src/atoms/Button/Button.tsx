import React from "react";

type ButtonProps = {
  label: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button className="dse-button__container">{label}</button>;
};

export default Button;
