import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Styles/header.css'

function OffcanvasExample() {
  return (
    <>
      <Navbar key={1} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#"><img className='logo' src="https://keralakaumudi.com/web-news/en/2023/11/NMAN0449546/image/kudumbashree.1699496950.jpg" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className='close'>
            </Offcanvas.Header>
            <Offcanvas.Body className='background'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='icons' href="#action1">HOME</Nav.Link>
                <Nav.Link className='icons' href="/about">ABOUT US</Nav.Link>
                <Nav.Link className='icons' href="/gallery">GALLERY</Nav.Link>
                <Nav.Link className='icons' href="#action4">CONTACT US</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;