import React from "react";
import styled from "styled-components";

const Styled = {
  Div: styled.div`
    button {
      width: 32px;
      border-style: none;
      border: 1px solid black;
      border-radius: 17px;
      background-color: transparent;
      cursor: pointer;
      color: ${({ color }) => color};
    }
  `,
};

const Button: React.FC<JSX.IntrinsicElements["button"]> = ({
  children,
  color,
  ...props
}) => {
  return (
    <Styled.Div color={color}>
      <button {...props}>{children}</button>
    </Styled.Div>
  );
};

export default Button;
