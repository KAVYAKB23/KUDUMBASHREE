import "../Styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <div className="slide_container">
        <Carousel fade data-bs-theme="dark" className="home_slides">
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2023/03/Kudumbashree-A-group-of-caterers-trained-by-Kudumbashree.-e1679020580662.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://www.kudumbashree.org/storage/photos/large/v7ltz-drg76.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://th-i.thgim.com/public/incoming/m9rfe5/article68566597.ece/alternates/FREE_1200/Kudumbashree%20Sarkaravaratty.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://s3-ap-southeast-1.amazonaws.com/sb-singleserver-prod-bucket/bd58d93e406d4b2ae42bde37405415ea/s_1629375765.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://d4pmlgzenkweq.cloudfront.net/pefxboif0a34kxmgw06d8ejg9k3i"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide_image"
              src="https://www.kudumbashree.org/storage/photos/large/ppcb4-amr2s.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="home_intro">
        <p>
          Kudumbashree, a pioneering initiative from the Government of Kerala,
          stands as a beacon of social empowerment and economic development. At
          its core, Kudumbashree is dedicated to uplifting women and their
          families through sustainable livelihoods, quality products, and
          impactful services.Our diverse range of products and services reflects
          the creativity, skill, and hard work of our community members. From
          handcrafted textiles and nutritious food products to educational
          services and home-based enterprises, each offering is a testament to
          the strength and innovation of the Kudumbashree network..By choosing
          Kudumbashree products and services, you’re not just making a purchase;
          you’re contributing to a larger movement that fosters self-reliance,
          community solidarity, and economic independence. Join us in supporting
          a model that transforms lives and strengthens communities, one product
          and service at a time. Explore our offerings and discover how
          Kudumbashree can make a difference in your life while supporting a
          brighter, more equitable future for all.
        </p>
      </div>
      <div>
        <div className="news_container">
          <h3>KUDUMBASHREE PRODUCTS</h3>
          <Carousel fade data-bs-theme="dark" className="news">
            <Carousel.Item>
              <div className="carousel_cards">
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://db8hgexwnviud.cloudfront.net/images/detailed/2574/81hSaaV3ZgL.jpg?t=1678532274"
                  />
                  <Card.Body>
                    <Card.Title>BANANA CHIPS</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/I/71kUub3Lh-L._AC_UL600_SR600,600_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>MIXTURE</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>PAKODA</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel_cards">
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://weaveskart.com/wp-content/uploads/2023/05/KappaTapioca-Chips-1-430x430.jpg"
                  />
                  <Card.Body>
                    <Card.Title>TAPIOCA CHIPS</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://weaveskart.com/wp-content/uploads/2023/05/Beetroot-Pakoda-1-430x430.jpg"
                  />
                  <Card.Body>
                    <Card.Title>BEETROOT PAKODA</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/I/71kUub3Lh-L._AC_UL600_SR600,600_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>MIXTURE</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel_cards">
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>PAKODA</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://db8hgexwnviud.cloudfront.net/images/detailed/2574/81hSaaV3ZgL.jpg?t=1678532274"
                  />
                  <Card.Body>
                    <Card.Title>MIXTURE</Card.Title>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "18rem" }}
                  className="product_single_card"
                >
                  <Card.Img
                    variant="top"
                    src="https://images-eu.ssl-images-amazon.com/images/I/71tod+43-9L._AC_UL200_SR200,200_.jpg"
                  />
                  <Card.Body>
                    <Card.Title>PAKODA</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
