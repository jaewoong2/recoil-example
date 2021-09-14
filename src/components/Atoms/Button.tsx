import React from "react";

const Button: React.FC<JSX.IntrinsicElements["button"]> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export default Button;
