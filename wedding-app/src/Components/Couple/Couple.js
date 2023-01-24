import React from "react";
import virat from '../../assets/pictures/virat.jpg';
import anushka from '../../assets/pictures/anushka.jpg';

const Couple = () => {
  return (
    <div>
      <section id="couple" className="couple_area pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h3 className="title">Lovely Couple</h3>
                <img src="assets/images/section_shape.png" alt="Shape" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="single_couple mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="couple_image">
                  <img src={virat} alt="Couple" />
                </div>
                <div className="couple_content text-center">
                  <img
                    className="shape"
                    src="assets/images/couple-shape.png"
                    alt="shape"
                  />
                  <h4 className="couple_name">Siddharth</h4>
                  <p>
                    Hi I am Siddharth,
                  </p>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="single_couple mt-30 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                <div className="couple_image">
                  <img src={anushka} alt="Couple" />
                </div>
                <div className="couple_content text-center">
                  <img
                    className="shape"
                    src="assets/images/couple-shape.png"
                    alt="shape"
                  />
                  <h4 className="couple_name">Anupriya</h4>
                  <p>
                    Hi I am Anupriya,
                  </p>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Couple;
