import React from "react";
import "./Header.css";
import "../../fonts/AlexBrush-Regular.ttf";
import { FaSearch } from "react-icons/fa";
import {Container,Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar>
          <Container>
            <Navbar.Brand>Sprinkle of Flavor</Navbar.Brand>
            <nav className="nav">
              <Link to="/" className="nav-link home-link">
                HOME
              </Link>
              <Link to="/about" className="nav-link about-link">
                ABOUT
              </Link>
              <Link to="/recipes" className="nav-link recipes-link">
                RECIPES
              </Link>
              <div className=" nav-link searchicon">
                <FaSearch />
              </div>
            </nav>
          </Container>
        </Navbar>
      </div>
      <hr className="line" />
    </>
  );
}

export default Header;
