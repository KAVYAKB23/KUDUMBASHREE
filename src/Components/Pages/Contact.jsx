import "../Styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>
          We would Love to Hear From You!. We are here to help and answer any
          questions you might have.
        </p>

        <div className="contact-details">
          <p>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <br />
            {/* <strong>Phone:</strong>  */}
            +91 888 888 888
          </p>
          <p>
            <FontAwesomeIcon icon={faAddressCard} size="2x" />
            <br />
            {/* <strong>Address:</strong> */}
            Kudumbashree postoffice p.o. ,place,district
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <br />
            {/* <strong>Email:</strong>  */}
            contact@example.com
          </p>
        </div>
        <div className="formcontainer">
          <div className="form-msg">
            <h3>Message Us</h3>
            <p>
              If you have any queries about our services or product message us
              using this form
            </p>
          </div>
          <form className="contact-form" action="/submit-form" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="map-container">
          <h3>Our Location</h3>
          <iframe
            src="https://maps.google.com/maps?q=Lunar%20Enterprises,ulloor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
