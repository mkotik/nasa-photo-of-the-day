import React, { useState, useHook } from "react";
import logo from "./assets/nasaLogo.png";
import "./HeaderStyles.css";
import styled from "styled-components";

const HeaderWrap = styled.header`
  height: 20vh;
  background: linear-gradient(60deg, #283048, #859398);
  display: flex;
  align-items: center;
  font-family: "Nunito", sans-serif;
  border-bottom: 5px solid white;
`;

const LogoBox = styled.div`
  margin-left: 1rem;
  width: 9.5rem;
  height: 8rem;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const HeaderText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-5.25rem);
`;

const MainText = styled.h1`
  margin-bottom: 5px;
`;

const SubText = styled.h3`
  margin-top: 5px;
`;

function Header(props) {
  const { date } = props;
  return (
    <HeaderWrap>
      <LogoBox>
        <Logo src={logo}></Logo>
      </LogoBox>
      <HeaderText>
        <MainText>NASA | Daily Serving</MainText>
        <SubText className="date">{date}</SubText>
      </HeaderText>
    </HeaderWrap>
  );
}

export default Header;
