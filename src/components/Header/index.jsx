import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLogginIn = !!loggedInUser.id;
  console.log(loggedInUser.photoUrl);
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>

          <Col xs="auto">
            {!isLogginIn && (
              <NavLink
                exact
                className="header__link"
                to="/sign-in"
                activeClassName="header__link--active"
              >
                Sign In
              </NavLink>
            )}

            {isLogginIn && <p>{loggedInUser.name}</p>}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
