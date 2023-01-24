import React from "react";
// import firstMeet from '../../assets/pictures/firstMeet.png';
import mehndiPic from '../../assets/pictures/mehndiPic.jpg';
import haldiPic from '../../assets/pictures/haldiPic.jpg';
import djPic from '../../assets/pictures/djPic.jpg';
import weddingPic from '../../assets/pictures/weddingPic.jpg';
import receptioPic from '../../assets/pictures/receptionPic.jpeg';
import firstDate from '../../assets/pictures/firstDate.jpg';
import living from '../../assets/pictures/living.png';

const WeddingEvents = () => {
  return (
    <div>
      <section id="event" className="our_love_area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30">
                <h3 className="title">Wedding events</h3>
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
                <h3 className="love_title">Haldi</h3>
                <p>
                The wedding season is already upon us and the blissful time for the lovebirds and engaged couples have begun. There will be fun, flare and the pre-wedding rituals that are significant to an Indian wedding. It’s time we need to know and understand those various ceremonies that are like heart and soul to the extravaganza. One such ceremony of great importance that needs to be mentioned and honoured is ‘haldi ceremony’.Turmeric is as such known for its anti-inflammatory properties and healing powers but it holds a special place of honour at Hindu wedding.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i> 10am 13 Feb 23
                </p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={haldiPic} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">Mehndi</h3>
                <p>
                Mehndi Ki Raat Ayi Mehndi Ki Raat, Dekhe Koi Pyari Dulhan Ke Haath....This Bollywood number races up in our mind as soon as we think about ‘mehndi’. And that’s because it’s one of the most vibrant celebration in an Indian wedding and is quite cool and quirky too. Splash of colours, fun, music, entertainment and the enthusiasm takes the ritual of mehndi to a whole new level. The function of mehndi becomes memorable and one to remember for being fun-centric, colourful, vivacious and bubbly.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i> 6pm 13 Feb 23
                </p>
              </div>
              <div
                className="love_image wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={mehndiPic} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">dj night</h3>
                <p>
                Sangeet or a musical night contributes a lot when it comes to pushing the boat out for an Indian wedding extravaganza. Family bonding, fun, frolic, drama, laughter riots, excitement and what not; Sangeet offers everything and is one of the most awaited pre-wedding celebrations. The best and the most vibrant of all the events; it serves perfectly to the platter of wedding events and rituals. But apart from the roller coaster ride, understanding the tradition of music and dance becomes a must.
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i>10pm 14 Feb 23
                </p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={djPic} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">Wedding muhurat</h3>
                <p>
                Indian tradition is varied with the culture of diversity be it natural exuberance of Kerala or the royal excessof the forts and palaces of Rajasthan, weddings in India can prove to be of an epic occasion in itself. 
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i>10am 15 Feb 23
                </p>
              </div>
              <div
                className="love_image wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={weddingPic} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">Reception</h3>
                <p>
                "Your wedding day may come and go, but may your love forever grow. Congratulations to the perfect couple!" "You'll always remember this day. Hope it's even more beautiful and perfect than you've been dreaming, and hope it's just the start of a lifetime that just gets better and better."
                </p>
              </div>
              <div className="love_date">
                <p>
                  <i className="lni lni-heart-filled"></i>8pm 15 Feb 22
                </p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={receptioPic} alt="love" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingEvents;
