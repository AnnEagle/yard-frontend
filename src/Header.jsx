import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Compass_logo from "./img/compass-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #eaebf0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Nav = styled.nav`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #3e4247;
  margin-left: 2rem;
  margin-right: 0;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Content>
          <Logo src={Compass_logo} />
          <Nav>
            <NavLink to="/">Купить</NavLink>
            <NavLink to="/">Снять</NavLink>
            <NavLink to="/">Наши Агенты</NavLink>
          </Nav>
        </Content>
      </Grid>
    </Header>
  );
};
