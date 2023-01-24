import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer_area">
        <div className="footer_shape_1">
          <img src="assets/images/shape-1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="footer_widget pt-80 pb-80 text-center">
            <div className="footer_logo">
              <a href="#">
                <img src="assets/images/logo-2.png" alt="logo" />
              </a>
            </div>
            <div className="footer_title">
              <h3 className="title">
                Siddharth <span>&</span> Anupriya
              </h3>
            </div>
            <ul className="footer_menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#couple">Couple</a>
              </li>
              <li>
                <a href="#event">Event</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#upload-photo">Upoad-Photo</a>
              </li>
            </ul>
          </div>
          <div className="footer_copyright text-center">
            <p>
              Designed and Developed by{" "}
              <a
                href="#"
                style={{ color: "#D59A57" }}
                rel="nofollow"
              >
                naru
              </a>
            </p>
          </div>
        </div>
      </footer>
      <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
    </div>
  );
};

export default Footer;
