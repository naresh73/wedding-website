import React from 'react';
import './assets/images/favicon.png';
import './assets/css/animate.css';
import './assets/css/LineIcons.css';
import "./assets/css/bootstrap.min.css"
import "./assets/css/default.css";
import "./assets/css/style.css";
import logo from './assets/images/logo.png';

export default function Index() {

    return (

        <body>
            [if IE]
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
            [endif]



            <div class="preloader">
                <div class="loader">
                    <div class="ytp-spinner">
                        <div class="ytp-spinner-container">
                            <div class="ytp-spinner-rotator">
                                <div class="ytp-spinner-left">
                                    <div class="ytp-spinner-circle"></div>
                                </div>
                                <div class="ytp-spinner-right">
                                    <div class="ytp-spinner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="header_area">
                <div class="header_navbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <nav class="navbar navbar-expand-lg">
                                    <a class="navbar-brand" href="index.html">
                                        <img src={logo} alt="dd" />
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" class="navbar-nav ml-auto">
                                            <li class="nav-item active">
                                                <a class="page-scroll" href="#home">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#couple">Couple</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#our_love">Story</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#gallery">Gallery</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#event">Event</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#contact">RSVP</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" class="header_slider slider-active">
                    <div class="single_slider bg_cover d-flex align-items-center"
                        style="background-image: url(assets/images/slider-1.jpg)">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <div class="slider_content text-center">
                                        <h5 class="slider_sub_title" data-animation="fadeInUp" data-delay="0.2s">WE ARE GETTING
                                            MARRIED</h5>
                                        <h2 class="slider_title" data-animation="fadeInUp" data-delay="0.7s">Michael
                                            <span>&</span> Jessica</h2>
                                        <span class="location" data-animation="fadeInUp" data-delay="1s">The Big Church, New
                                            York, USA</span>
                                        <p data-animation="fadeInUp" data-delay="1.4s">
                                            <img src={logo} alt="Shape" />
                                            20 December 2023
                                            <img
                                                src={logo} alt="Shape" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="couple" class="couple_area pt-120 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section_title text-center pb-30">
                                <h3 class="title">Lovely Couple</h3>
                                <img src={logo} alt="dd" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="single_couple mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div class="couple_image">
                                    <img src={logo} alt="dd" />
                                </div>
                                <div class="couple_content text-center">
                                    <img class="shape" src={logo} alt="dd" />
                                    <h4 class="couple_name">Michael Smith</h4>
                                    <p>Hi I am Michael Smith, dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries.</p>
                                    <ul class="social">
                                        <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                        <li><a href="#"><i class="lni lni-instagram-original"></i></a></li>
                                        <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single_couple mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.6s">
                                <div class="couple_image">
                                    <img src={logo} alt="dd" />
                                </div>
                                <div class="couple_content text-center">
                                    <img class="shape" src={logo} alt="dd" />
                                    <h4 class="couple_name">Jessica Jones</h4>
                                    <p>Hi I am Jessica Jones, dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries.</p>
                                    <ul class="social">
                                        <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                        <li><a href="#"><i class="lni lni-instagram-original"></i></a></li>
                                        <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="coming_soon" class="coming_soon_area pt-20 pb-70">
                <div class="coming_soon_shape_1">
                    <img src={logo} alt="dd" />
                </div>

                <div class="container">

                    <div class="text-center">
                        <h1>You are Using Free Lite Version</h1>
                        <p>Please purchase full version to get all elements, sections and permission to remove footer credit</p>
                        <a href="https://rebrand.ly/wedding-day-ud" rel="nofollow" class="main-btn">Purchase Now</a>
                    </div>

                </div>

                <div class="coming_soon_shape_2">
                    <img src={logo} alt="dd" />
                </div>
            </section><section id="our_love" class="our_love_area pt-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section_title text-center pb-30">
                                <h3 class="title">Our Love Story</h3>
                                <img src={logo} alt="dd" />
                            </div>
                        </div>
                    </div>
                    <div class="love_wrapper">
                        <div class="single_love d-flex flex-wrap align-items-center">
                            <div class="love_content order-md-last wow fadeInLeftBig" data-wow-duration="1.3s"
                                data-wow-delay="0.4s">
                                <h3 class="love_title">We Met For The First Time</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna nose aaliquyam erat, sed diam voluptua. At vero eos et
                                    accusam justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea timata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                            </div>
                            <div class="love_date">
                                <p><i class="lni lni-heart-filled"></i> 7 May 21</p>
                            </div>
                            <div class="love_image order-md-first wow fadeInRightBig" data-wow-duration="1.3s"
                                data-wow-delay="0.4s">
                                <img src={logo} alt="dd" />
                            </div>
                        </div>

                        <div class="single_love d-flex flex-wrap align-items-center">
                            <div class="love_content text-lg-right wow fadeInRightBig" data-wow-duration="1.3s"
                                data-wow-delay="0.4s">
                                <h3 class="love_title">We AreFirst Dating</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna nose aaliquyam erat, sed diam voluptua. At vero eos et
                                    accusam justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea timata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                            </div>
                            <div class="love_date">
                                <p><i class="lni lni-heart-filled"></i> 15 Jan 22</p>
                            </div>
                            <div class="love_image wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.4s">
                                <img src={logo} alt="dd" />
                            </div>
                        </div>

                        <div class="single_love d-flex flex-wrap align-items-center">
                            <div class="love_content order-md-last wow fadeInLeftBig" data-wow-duration="1.3s"
                                data-wow-delay="0.4s">
                                <h3 class="love_title">We Live Together</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna nose aaliquyam erat, sed diam voluptua. At vero eos et
                                    accusam justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea timata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                            </div>
                            <div class="love_date">
                                <p><i class="lni lni-heart-filled"></i> 25 Jul 22</p>
                            </div>
                            <div class="love_image order-md-first wow fadeInRightBig" data-wow-duration="1.3s"
                                data-wow-delay="0.4s">
                                <img src={logo} alt="dd" />
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="gallery" class="gallery_area pt-120">
                <div class="container">

                    <div class="text-center">
                        <h1>You are Using Free Lite Version</h1>
                        <p>Please purchase full version to get all elements, sections and permission to remove footer credit</p>
                        <a href="https://rebrand.ly/wedding-day-ud" rel="nofollow" class="main-btn">Purchase Now</a>
                    </div>

                </div>
            </section><section id="event" class="event_area pt-120 pb-130">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section_title text-center pb-30">
                                <h3 class="title">Weeding Events</h3>
                                <img src={logo} alt="dd" />
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7">
                            <div class="single_event mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div class="event_image">
                                    <img src={logo} alt="dd" />
                                </div>
                                <div class="event_content">
                                    <span class="date">02 Feb 2023</span>
                                    <h3 class="event_title"><a href="#">Bride Shower</a></h3>
                                    <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                        the 1500s, when unknown printer took a galley</p>
                                    <a class="more" href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7">
                            <div class="single_event mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <div class="event_image">
                                    <img src={logo} alt="dd" />
                                </div>
                                <div class="event_content">
                                    <span class="date">05 Feb 2023</span>
                                    <h3 class="event_title"><a href="#">Wedding Reception</a></h3>
                                    <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                        the 1500s, when unknown printer took a galley</p>
                                    <a class="more" href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-7">
                            <div class="single_event mt-30 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                <div class="event_image">
                                    <img src={logo} alt="dd" />
                                </div>
                                <div class="event_content">
                                    <span class="date">07 Feb 2023</span>
                                    <h3 class="event_title"><a href="#">Bachelor Party</a></h3>
                                    <p>Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                        the 1500s, when unknown printer took a galley</p>
                                    <a class="more" href="#">Read More...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section id="contact" class="contact_area pt-130 pb-130">
                <div class="container">

                    <div class="text-center">
                        <h1>You are Using Free Lite Version</h1>
                        <p>Please purchase full version to get all elements, sections and permission to remove footer credit</p>
                        <a href="https://rebrand.ly/wedding-day-ud" rel="nofollow" class="main-btn">Purchase Now</a>
                    </div>

                </div>
            </section><footer id="footer" class="footer_area">
                <div class="footer_shape_1">
                    <img src={logo} alt="dd" />
                </div>

                <div class="container">
                    <div class="footer_widget pt-80 pb-80 text-center">
                        <div class="footer_logo">
                            <a href="#"><img src={logo} alt="logo" /></a>
                        </div>
                        <div class="footer_title">
                            <h3 class="title">Michael <span>&</span> Jessica</h3>
                        </div>
                        <ul class="footer_menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Couple</a></li>
                            <li><a href="#">Story</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Event</a></li>
                            <li><a href="#">RSVP</a></li>
                        </ul>
                    </div>
                    <div class="footer_copyright text-center">
                        <p>Designed and Developed by <a href="https://uideck.com" style="color: #D59A57"
                            rel="nofollow">UIdeck</a></p>
                    </div>
                </div>
            </footer><a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>




            {/* <section class="">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-">

                        </div>
                    </div>
                </div>
            </section> */}
            <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
            <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>

            <script src="assets/js/popper.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>

            <script src="assets/js/jquery.easing.min.js"></script>
            <script src="assets/js/scrolling-nav.js"></script>

            <script src="assets/js/wow.min.js"></script>

            <script src="assets/js/main.js"></script>

        </body>


    )
}


