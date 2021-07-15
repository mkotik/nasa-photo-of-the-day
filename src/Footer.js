import React, { useState } from "react";
import styled from "styled-components";

const FooterWrap = styled.section`
  background-color: black;
  z-index: -1;
`;

const TopDiv = styled.div`
  margin-bottom: 1rem;
`;

const BottomDiv = styled.div`
  height: 4vh;
`;

const Copywrite = styled.h3`
  margin: 0px;
  color: white;
  font-size: 1rem;
  float: right;
  margin-right: 3rem;
`;

const Separator = styled.p`
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
`;

const NavWrap = styled.nav`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const Links = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: white;

  &:hover {
    color: rgb(10, 136, 179);
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <FooterWrap>
      <TopDiv>
        <NavWrap>
          <Links
            href="https://github.com/mkotik/nasa-photo-of-the-day/tree/marat-kotik"
            target="_blank"
          >
            Repository
          </Links>
          <Separator> | </Separator>
          <Links href="https://github.com/mkotik" target="_blank">
            Github
          </Links>
          <Separator> | </Separator>
          <Links href="https://www.linkedin.com/in/maratkotik/" target="_blank">
            Linkedin
          </Links>
        </NavWrap>
      </TopDiv>
      <BottomDiv>
        <Copywrite>© Marat Kotik</Copywrite>
      </BottomDiv>
    </FooterWrap>
  );
}

export default Footer;
