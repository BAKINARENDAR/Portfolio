import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import picture from "../../images/picture.png";

const Home = () => {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-content">
            <div className="home-part">
              <div className="home-first">
                <div className="name">
                  <h1>Baki Narendar</h1>
                </div>
                <div className="typewriter">
                  <h2>
                    I am a{" "}
                    <span className="typewriter-text">
                      <Typewriter
                        words={[
                          "Web Developer",
                          "Student",
                          "Tech Enthusiast",
                          "Problem Solver",
                          "Aspiring Engineer",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                      />
                    </span>
                  </h2>
                </div>

                <div className="social-links">
                  <div className="github">
                    <a
                      href="https://github.com/BAKINARENDAR"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/bakinarendar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <FaLinkedin />
                    </a>
                  </div>

                  <div className="gmail">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=bakinarendar@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <BiLogoGmail />
                    </a>
                  </div>
                </div>
              </div>

              <div className="home-second">
                <div className="home-profile">
                  <img  src={picture} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
