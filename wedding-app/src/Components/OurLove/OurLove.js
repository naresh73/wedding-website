import React from "react";
import firstMeet from '../../assets/pictures/firstMeet.png';
import firstDate from '../../assets/pictures/firstDate.jpg';
import living from '../../assets/pictures/living.png';

const OurLove = () => {
  return (
    <div>
      <section id="our_love" className="our_love_area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h3 className="title">Our Love Story</h3>
                <img src="assets/images/section_shape.png" alt="Shape" />
              </div>
            </div>
          </div>
          <div className="love_wrapper">
            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">We Met For The First Time</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i> 7 May 21
                </p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={firstMeet} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">We AreFirst Dating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i> 15 Jan 22
                </p>
              </div>
              <div
                className="love_image wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={firstDate} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">We Live Together</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i> 25 Jul 22
                </p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={living} alt="love" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLove;
