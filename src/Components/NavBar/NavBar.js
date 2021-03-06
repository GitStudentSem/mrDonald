import React from "react";
import styled from "styled-components";
import logoImg from "../../image/logo.svg";
import signImg from "../../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const ImgLogo = styled.img`
  width: 50px;
`;
const Login = styled.button`
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Логотип" />
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <img src={signImg} alt="Войти" />
      <p>Войти</p>
    </Login>
  </NavBarStyled>
);
