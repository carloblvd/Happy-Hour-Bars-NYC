import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="row">
          <div className="footer__content">
            <Link to="/">
              <button className="footer__home click">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <span className="footer__home--btn"> Home</span>
              </button>
            </Link>
            <ul className="footer__social--links">
              <li className="footer__item">
                <button className="footer__social--link click">
                  <a href="https://github.com/carloblvd" target="_blank">
                    <span className="footer__social--logo">
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </span>
                  </a>
                </button>
              </li>
              <li className="footer__item">
                <button className="footer__social--link click">
                  <a
                    href="https://www.linkedin.com/in/carlo-munoz-04069a164/"
                    target="_blank">
                    <span className="footer__social--logo">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </span>
                  </a>
                </button>
              </li>
              <li className="footer__item">
                <button className="footer__social--link click">
                  <a
                    href="https://www.instagram.com/carloblvd/"
                    target="_blank">
                    <span className="footer__social--logo">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </span>
                  </a>
                </button>
              </li>
              <li className="footer__item">
                <button className="footer__social--link click">
                  <a
                    href="https://carloblvd.github.io/Portfolio/"
                    target="_blank">
                    <span className="footer__social--logo">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </span>
                  </a>
                </button>
              </li>
              <li className="footer__item">
                <button className="footer__social--link click">
                  <a
                    href="https://www.facebook.com/carlo.munoz.1426/"
                    target="_blank">
                    <span className="footer__social--logo">
                      <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </span>
                  </a>
                </button>
              </li>
            </ul>
            <div className="footer__copyright"> 2023 &copy; Carlo Munoz</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
