import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';

function Header() {
  const [activeSection, setActiveSection] = React.useState('Home');

  React.useEffect(() => {
    $(window).scroll(function () {

      let position = $(this).scrollTop();
      if (position >= 100) {
        $('.sticky-outer-wrapper').addClass('navbar_fixed');
        $('.sticky-inner-wrapper').css('position', 'fixed');
        $('.sticky-inner-wrapper').css("width", "100%");
        $('.sticky-inner-wrapper').css("z-index", "5");
      } else {
        $('.sticky-outer-wrapper').removeClass('navbar_fixed');
        $('.sticky-inner-wrapper').css('position', 'relative');
        $('.sticky-inner-wrapper').css("width", "100%");
        $('.sticky-inner-wrapper').css("z-index", "5");
      }

    });
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg sticky-inner-wrapper" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Motoko</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
          <Nav.Link href="#Home" active={activeSection === 'Home'}>Home</Nav.Link>
            <Nav.Link href="#Comments" active={activeSection === 'Home'}>Comments</Nav.Link>
            <Nav.Link href="#Strings" active={activeSection === 'Home'}>Strings</Nav.Link>
            <Nav.Link href="#Booleans" active={activeSection === 'Home'}>Booleans</Nav.Link>
            <Nav.Link href="#Integers" active={activeSection === 'Home'}>Integers</Nav.Link>
            <Nav.Link href="#Bounded-integers" active={activeSection === 'Home'}>Bounded integers</Nav.Link>
            <Nav.Link href="#Floats" active={activeSection === 'Home'}>Floats</Nav.Link>
            <Nav.Link href="#Actors" active={activeSection === 'Home'}>Actors </Nav.Link>
            <Nav.Link href="#Mutable-state" active={activeSection === 'Home'}>Mutable state</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;