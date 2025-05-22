import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-container">
          <div className="footer-content">
            <div className="heading1-name">
              <h1>Baki Narendar</h1>
            </div>
            <div className="heading2-para">
              <p>
                Aspiring Software Engineer focused on creating impactful
                solutions and Exploring the world of technology.
              </p>
            </div>

            <div className="footer-social-links">
              <div className="github">
                <a
                  href="https://github.com/BAKINARENDAR"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  <FaGithub />
                </a>
              </div>
               <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/bakinarendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" ,color:"white"}}
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className="gmail">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bakinarendar@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  <BiLogoGmail />
                </a>
              </div>
            </div>
            <br />
            <div className="copyright">
              <p>
                Copyright © <strong> Baki Narendar </strong> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
