import React from "react";
import '../../assets/images/slider-1.jpg';
// import headerImg from './header.jpg';
import headerImg from '../../assets/additional-components/header-img.jpg';

const NavBar = () => {
  return (
    <div>
      <div className="header_area">
        <div className="header_navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="page-scroll" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#couple">
                          Couple
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#event">
                          Events
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#gallery">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#upload-photo">
                          Upload-Photo
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div id="home" className="header_slider slider-active">
          <div
            className="single_slider bg_cover d-flex align-items-center"
            style={{
              backgroundImage: "url(" + headerImg + ")"
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="slider_content text-center">
                    <h5
                      className="slider_sub_title"
                      data-animation="fadeInUp"
                      data-delay="0.2s"
                    >
                      WE ARE GETTING MARRIED
                    </h5>
                    <h2
                      className="slider_title"
                      data-animation="fadeInUp"
                      data-delay="0.7s"
                    >
                      Siddarth <span>&</span> Anupriya
                    </h2>
                    <span
                      className="location"
                      data-animation="fadeInUp"
                      data-delay="1s"
                    >
                      The Big Town Hall, Kanpur
                    </span>
                    <p data-animation="fadeInUp" data-delay="1.4s">
                      <img src="assets/images/header-shape-1.png" alt="" />
                      14 Febuary 2023
                      <img src="assets/images/header-shape-2.png" alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
