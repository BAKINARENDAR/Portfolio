import { Button } from '@mui/material';
import { CiZoomIn } from 'react-icons/ci';
import { FiExternalLink } from 'react-icons/fi';

import af from '../../images/amazon-frontend.png';
import currency from '../../images/currency.png';
import portfolio from '../../images/portfolio.png';

const projects = [
  {
    title: 'Currency Converter',
    image: currency,
    link: 'https://bakinarendar.github.io/Currency-Converter/',
  },
  {
    title: 'Amazon Frontend',
    image: af,
    link: 'https://bakinarendar.github.io/Amazon-Frontend/',
  },
  {
    title: 'Portfolio',
    image: portfolio,
    link: 'https://yourlink.com',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-content">
          <div className="portfolio-title">
            <h2>Portfolio</h2>
          </div>
          <div className="project-title">
            <h1>MY PROJECTS</h1>
          </div>
          <div className="projects">
            {projects.map(({ title, image, link }, index) => (
              <div className="project-card" key={index}>
                <img src={image} alt={title} className="project-image" />
                <div className="project-label">{title}</div>
                <div className="project-overlay">
                  <Button className="zoom" title="Zoom">
                    <CiZoomIn />
                  </Button>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button className="goto-link" title="Visit Site">
                      <FiExternalLink />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
