import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/gallery.css";

function Gallery() {
  return (
    <Container fluid className="gallery-container">
      <h1 className="heading">GALLERY</h1>
      <div className="container">
        {/* 1st row */}
        <Row className="justify-content-center">
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://db8hgexwnviud.cloudfront.net/images/detailed/2574/81hSaaV3ZgL.jpg?t=1678532274"
              />
              <Card.Body>
                <Card.Title className="text-center">BANANA CHIPS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71kUub3Lh-L._AC_UL600_SR600,600_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">MIXTURE</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">PAKODA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://weaveskart.com/wp-content/uploads/2023/05/KappaTapioca-Chips-1-430x430.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">TAPIOCA CHIPS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* 2nd row */}
        <Row className="justify-content-center">
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://weaveskart.com/wp-content/uploads/2023/05/Beetroot-Pakoda-1-430x430.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">BEETROOT PAKODA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71kUub3Lh-L._AC_UL600_SR600,600_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">MIXTURE</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">PAKODA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://weaveskart.com/wp-content/uploads/2023/05/KappaTapioca-Chips-1-430x430.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">TAPIOCA CHIPS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* 3rd row */}
        <Row className="justify-content-center">
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://weaveskart.com/wp-content/uploads/2023/05/Beetroot-Pakoda-1-430x430.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">BEETROOT PAKODA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71kUub3Lh-L._AC_UL600_SR600,600_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">MIXTURE</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">PAKODA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="mx-auto product-card">
              <Card.Img
                variant="top"
                src="https://weaveskart.com/wp-content/uploads/2023/05/KappaTapioca-Chips-1-430x430.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">TAPIOCA CHIPS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Gallery;
