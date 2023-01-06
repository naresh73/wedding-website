import React from "react";
import brideShower from '../../assets/pictures/brideShower.png';
import  weddingReception from '../../assets/pictures/weddingReception.jpg';
import  bachelorParty from '../../assets/pictures/bachelorParty.png';


const Event = () => {
  return (
    <div>
      <section id="event" className="event_area pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h3 className="title">Weeding Events</h3>
                <img src="assets/images/section_shape.png" alt="Shape" />
              </div>
            </div>
          </div>
          <section id="gallery" className="gallery_area pt-10"></section>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="event_image">
                  <img src={brideShower} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">02 Feb 2023</span>
                  <h3 className="event_title">
                    <a href="/">Bride Shower</a>
                  </h3>
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p>
                  <a className="more" href="/">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                <div className="event_image">
                  <img src={weddingReception} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">05 Feb 2023</span>
                  <h3 className="event_title">
                    <a href="/">Wedding Reception</a>
                  </h3>
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p>
                  <a className="more" href="/">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                <div className="event_image">
                  <img src={bachelorParty} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">07 Feb 2023</span>
                  <h3 className="event_title">
                    <a href="/">Bachelor Party</a>
                  </h3>
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p>
                  <a className="more" href="/">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
