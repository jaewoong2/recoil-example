import React from "react";
import styled from "styled-components";

const Styled = {
  Main: styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const Layout: React.FC = ({ children }) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default Layout;
