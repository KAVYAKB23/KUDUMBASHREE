import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Styles/header.css';

function OffcanvasExample() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='header'>
      <Navbar expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className='logo' src="https://keralakaumudi.com/web-news/en/2023/11/NMAN0449546/image/kudumbashree.1699496950.jpg" alt="logo" />
          </Navbar.Brand>

          {/* Conditionally render Navbar.Toggle for small screens or inline Nav for larger screens */}
          {windowWidth < 992 ? (
            <>
              {/* Wrapper for positioning the toggle button */}
              <div className="toggle-wrapper">
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
              </div>

              {/* Offcanvas menu */}
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"  // Ensure it opens on the right
                className="offcanvas-menu"  // For additional custom styles
              >
                <Offcanvas.Header closeButton className='close'>
                </Offcanvas.Header>
                <Offcanvas.Body className='background'>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='icons' href="/">HOME</Nav.Link>
                    <Nav.Link className='icons' href="/about">ABOUT US</Nav.Link>
                    <Nav.Link className='icons' href="/gallery">GALLERY</Nav.Link>
                    <Nav.Link className='icons' href="/contact">CONTACT US</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          ) : (
            /* Inline Navbar links on large screens */
            <Nav className="d-flex">
              <Nav.Link className='icons-lg' href="/">HOME</Nav.Link>
              <Nav.Link className='icons-lg' href="/about">ABOUT US</Nav.Link>
              <Nav.Link className='icons-lg' href="/gallery">GALLERY</Nav.Link>
              <Nav.Link className='icons-lg' href="/contact">CONTACT US</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default OffcanvasExample;
