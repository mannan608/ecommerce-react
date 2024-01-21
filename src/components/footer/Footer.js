import Images from "../../assets/Images";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-fluid">
        <div className="footer d-flex flex-column">
          <div className="footer-top d-flex justify-content-between align-items-center">
            <div className="company-icon">
              <img src={Images.logo} alt="" />
            </div>
            <div className="important-link d-flex gap-4">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="about.html">Contact</a>
            </div>
            <div className="socila-media">
              <div className="icons d-flex align-items-center gap-3">
                <Link>
                  <div className="circles facebook">
                    <img
                      src={Images.fbFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>

                <Link>
                  <div className="circles instragram">
                    <img
                      src={Images.insFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>

                <Link>
                  <div className="circles tiktok">
                    <img
                      src={Images.tiktokFooter}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center">
            <p> © 2020 - 2023 Iconic Style . All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
