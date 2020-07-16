import React from "react";
import styled from "styled-components";
import headerImage from "../Images/menu.png";
import "../../src/theme.css";

const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  overflow-x: hidden;
`;
const Image = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 1px solid var(--light-grey);
  box-shadow: 0 4px 4px 0 var(--light-grey);
`;

function Header() {
  return (
    <StyledHeader>
      <Image src={headerImage} alt="HeaderImage" />
    </StyledHeader>
  );
}

export default Header;
