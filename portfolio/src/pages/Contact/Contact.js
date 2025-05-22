import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhone
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>

        <div className="contact-ways">
          {/* Left Column */}
          <div className="contact-column">
            <div className="contact-item">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>
              <div className="right-matter">
                <h4>Address</h4>
                <p>Telangana, Hyderabad</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <div className="right-matter">
                <h4>Email Us</h4>
                <p>bakinarendar@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-column">
            <div className="contact-item">
              <div className="icon-circle">
                <FaPhone />
              </div>
              <div className="right-matter">
                <h4>Call Me</h4>
                <p>+91 8247086253</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-circle">
                <FiShare2 />
              </div>
              <div className="right-matter">
                <h4>Social Profiles</h4>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/bakinarendar/"
                    target="_blank"
                    rel="noopener noreferrer"
                     style={{ textDecoration: "none", color:"white" }}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/BAKINARENDAR"
                    target="_blank"
                    rel="noopener noreferrer"
                     style={{ textDecoration: "none", color:"white" }}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xwpojqdq" 
            method="POST"
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="8"
              required
            ></textarea>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
