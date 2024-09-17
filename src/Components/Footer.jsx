import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="text-secondary pt-4">
      <Container>
        <Row>
          <Col md={4}>
            <img  className='logoImg'src="https://keralakaumudi.com/web-news/en/2023/11/NMAN0449546/image/kudumbashree.1699496950.jpg" alt="logo" />
            <p>
              We are a team committed to delivering quality content and
              services to our customers. Our mission is to create the best
              user experience.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home"  className="text-secondary">Home</a></li>
              <li><a href="#about" className="text-secondary">About Us</a></li>
              <li><a href="#gallery"  className="text-secondary">Gallery</a></li>
              <li><a href="#contact" className="text-secondary">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="#"  className="text-secondary me-3"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" className="text-secondary me-3"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" className="text-secondary me-3"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"className="text-secondary me-3"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="bg-bg-body-tertiary text-center">
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
