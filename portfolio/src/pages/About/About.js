import { IoIosArrowForward } from "react-icons/io";
import picture from "../../images/picture.png";
const About = () => {
  return (
    <>
      <section>
        <div className="About-container">
          <div className="about-content">
            <div className="about-title">
              <h2>About</h2>
            </div>
            <div className="about-matter">
              <p>
                I’m a web developer , Alongside web development, I’m actively
                improving my Data Structures and Algorithms (DSA) skills to
                strengthen my problem-solving ability. I’m currently a B.Tech
                student, aiming to become a software engineer.
              </p>
            </div>

            <div className="part2-about">
              <div className="about-pic">
                  <img  src={picture} alt=""/>
              </div>
              <div className="about-me">
                <h2>Problem Solver & Web Developer.</h2>

                <div className="info-container">
                  <div className="first-block">
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Birthday: </strong> 1 January 2006
                    </p>
                    <p style={{cursor:"pointer"}}>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Website: </strong> <a style={{textDecoration:"none", color:"white"}} href="https://bakinarendar.github.io/Portfolio/" >https://bakinarendar.github.io/Portfolio/</a>
                    </p>
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Phone: </strong> +91 8247086253
                    </p>
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>City: </strong> Hyderabad
                    </p>
                  </div>

                  <div className="second-block">
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Age: </strong> 19
                    </p>
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Degree: </strong> Undergraduate
                    </p>
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Email: </strong> bakinarendar@gmail.com
                    </p>
                    <p>
                      <IoIosArrowForward className="arrow-style" />
                      <strong>Freelance: </strong> Not Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="part3-about">
              <div className="skills-container">
                <h1>MY SKILLS</h1>
                <div className="percent-container">
                  <div className="p-first-block">
                    <div className="skill">
                      <div className="skill-header">
                        <span>HTML</span>
                        <span>85%</span>
                      </div>
                      <progress value="85" max="100"></progress>
                    </div>
                    <div className="skill">
                      <div className="skill-header">
                        <span>CSS</span>
                        <span>92%</span>
                      </div>
                      <progress value="90" max="100"></progress>
                    </div>
                    <div className="skill">
                      <div className="skill-header">
                        <span>React JS</span>
                        <span>85%</span>
                      </div>
                      <progress value="85" max="100"></progress>
                    </div>
                  </div>

                  <div className="p-second-block">
                    <div className="skill">
                      <div className="skill-header">
                        <span>Boot-strap</span>
                        <span>50%</span>
                      </div>
                      <progress value="50" max="100"></progress>
                    </div>
                    <div className="skill">
                      <div className="skill-header">
                        <span>Node JS</span>
                        <span>30%</span>
                      </div>
                      <progress value="30" max="100"></progress>
                    </div>
                    <div className="skill">
                      <div className="skill-header">
                        <span>Mongo DB</span>
                        <span>45%</span>
                      </div>
                      <progress value="45" max="100"></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
