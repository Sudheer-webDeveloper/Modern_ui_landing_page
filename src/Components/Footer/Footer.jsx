import React from "react";
import logo1 from "../../images/background/b2s.png";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="links-footer">
        <div className="footer-image">
          <img src={logo1} alt="" />
          <p>
            Feel free to reach out for more designs similar to this one. I've
            got plenty more where that came from!
          </p>
        </div>
        <ul className="links">
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#categories"> Categoreis</a>{" "}
          </li>
          <li>
            <a href="#products"> Products</a>{" "}
          </li>
          <li>
            <a href="#reviews"> Reviews</a>{" "}
          </li>
          <li>
            <a href="#contact"> Contact</a>{" "}
          </li>
        </ul>
        <div className="contact">
          <h2>sudheertalaudi@gmail.com</h2>
          <h2>9676234130</h2>
        </div>
      </div>

      <div className="social-media">
        <h2>
          <a
            href="https://sudheer-folio.vercel.app/"
            target="_blank"
            className="portfolio"
          >
            portfolio
          </a>
        </h2>

        <a
          href="https://www.linkedin.com/in/talapudisudheer99/"
          target="_blank"
        >
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/Sudheer-webDeveloper" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/1HENfLFy6C0ZPLDHFH_9PQy3FYWOTT7w9/view?usp=sharing"
          target="_blank"
        >
          <RxResume />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
