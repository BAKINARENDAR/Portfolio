import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section>
      <div className="header-container">
        <div className="header-content">
          <div className="home-header">
            <div className="personal">
              <h1>
                <span className="highlight">B</span>aki's{" "}
                <span className="highlight">P</span>ortfolio
              </h1>
            </div>

            {/* Navigation links for desktop */}
            <div className="header-names">
              <Link to="/Home" style={{ textDecoration: "none" }}>
                <p>Home</p>
              </Link>
              <Link to="/About" style={{ textDecoration: "none" }}>
                <p>About</p>
              </Link>
              <Link to="/Resume" style={{ textDecoration: "none" }}>
                <p>Resume</p>
              </Link>
              <Link to="/Certifications" style={{ textDecoration: "none" }}>
                <p>Certifications</p>
              </Link>
              <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                <p>Portfolio</p>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <p>Contact</p>
              </Link>
              <a
                href="https://github.com/BAKINARENDAR"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p>Github</p>
              </a>
            </div>

            {/* Menu toggle for mobile */}
            <div className="menu-toggle" onClick={() => setSidebarOpen(true)}>
              <CiMenuBurger />
            </div>

            {/* Sidebar for mobile */}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
              <span className="close-btn" onClick={() => setSidebarOpen(false)}>
                <IoMdClose />
              </span>
              <Link to="/Home" style={{ textDecoration: "none" }}>
                <p>Home</p>
              </Link>
              <Link to="/About" style={{ textDecoration: "none" }}>
                <p>About</p>
              </Link>
              <Link to="/Resume" style={{ textDecoration: "none" }}>
                <p>Resume</p>
              </Link>
              <Link to="/Certifications" style={{ textDecoration: "none" }}>
                <p>Certifications</p>
              </Link>
              <Link to="/Portfolio" style={{ textDecoration: "none" }}>
                <p>Portfolio</p>
              </Link>
              <Link to="/Contact" style={{ textDecoration: "none" }}>
                <p>Contact</p>
              </Link>
              <a
                href="https://github.com/BAKINARENDAR"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p>Github</p>
              </a>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
              <div
                className="overlay"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
