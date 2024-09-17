import { useState } from "react";
import "../Styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import validation from "../Formvalidation";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formError, setformError] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setformError(validation(formData));
    setisSubmit(true);
    if (Object.keys(formError).length === 0 && isSubmit) {
      alert("form submited");
      console.log("form submited");
    }
  };

  return (
    <>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>
          We would Love to Hear From You!. We are here to help and answer any
          questions you might have.
        </p>

        <div className="formcontainer">
          <div className="form-msg">
            <div className="contact-details">
              <p className="contact_icon">
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <strong className="conatct_details_info">
                  +91 888 888 888
                </strong>
              </p>
              <p className="contact_icon">
                <FontAwesomeIcon icon={faAddressCard} size="2x" />
                <strong className="conatct_details_info">
                  Kudumbashree postoffice p.o.
                </strong>
              </p>
              <p className="contact_icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <strong className="conatct_details_info">
                  contact@example.com
                </strong>
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            <p style={{ textAlign: "left" }} className="error_msg">
              {formError.name}
            </p>

            <label>Email</label>
            <input id="email" name="email" onChange={handleChange} />
            <p style={{ textAlign: "left" }} className="error_msg">
              {formError.email}
            </p>

            <label>Phone</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} />
            <p style={{ textAlign: "left" }} className="error_msg">
              {formError.phone}
            </p>

            <label>Message</label>
            <textarea name="message" onChange={handleChange}></textarea>
            <p style={{ textAlign: "left" }} className="error_msg">
              {formError.message}
            </p>

            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
          className="map_frame"
          src="https://maps.google.com/maps?q=Lunar%20Enterprises,ulloor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
