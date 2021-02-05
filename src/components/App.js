import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShareAlt, faChevronRight, faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/london-dairy-logo.png';
import banner from '../assets/images/homepage_banner.png';
import creamBanner from '../assets/images/cream-banner.png';
import recipe1 from '../assets/images/recipe-1.png';
import recipe2 from '../assets/images/recipe-2.png';
import recipe3 from '../assets/images/recipe-3.png';
import recipe4 from '../assets/images/recipe-4.png';
import recipe5 from '../assets/images/recipe-5.png';
import recipe6 from '../assets/images/recipe-6.png';
import videoBanner from '../assets/images/video-banner.png';
import '../assets/css/App.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import Header from "./header";
import Recipe from "./recipe";
import RevSlider, { Slide, Caption } from 'react-rev-slider';

const options = {
  items: 1,
  nav: true,
  rewind: true,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  autoplay: true
};

const config = {
  delay:9000,
  startwidth:1170,
  startheight:500,
  hideThumbs:10,
  fullWidth:"on",
  forceFullWidth:"on"
};


export default function App(props) {
  return (
    <div className="App">
      
      <Header />
      <div className="homepage-banner width100">
        <img src={banner} alt="CoolBrand" />
      </div>
      <section className="cream-section pad-t-lg pad-b-lg">
        <div className="container">
          <div className="row">
            <div className="offset-md-1 col-md-4">
            <img src={creamBanner} className="width100" alt="CoolBrand" />
            </div>
            <div className="offset-md-1 col-md-5 pad-lr-zero">
              <div className="cream-area">
                <h4 className="pad-b-xs">Hello, fellow ice creamconnoisseur! </h4>
                <p>Our premium range of ice creams are crafted especially for you and only the finest ingredients will do!</p>
                <p>Each and every flavour is a blend of the creamiest milk and exquisite ingredients sourced from around the world.</p>
                <p>Go ahead, sample all manner of delights and revel in the London Dairy Premium Ice Cream experience.</p>
                <p><strong>Delve into a world of pleasure, scoop by scoop!</strong></p>
                <a href="">Know More <FontAwesomeIcon icon={faChevronRight} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Recipe />
      <section className="video-carousel pad-t-sm pad-b-md">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
            <OwlCarousel options={options} >
                <div>
                  <img src={videoBanner} alt="The Last of us"/>
                  <div className="video-info disp-tab">
                    <div className="disp-tab-cell video-icon">
                      <p><FontAwesomeIcon icon={faPlay} /></p>
                    </div>
                    <div className="disp-tab-cell video-text">
                    <h4>London Dairy</h4>
                    <p>Introducing Cookies & Cream Ice Cream</p>
                    </div>
                  </div>  
                </div>
                <div>
                  <img src={videoBanner} alt="GTA V"/>
                  <div className="video-info disp-tab">
                    <div className="disp-tab-cell video-icon">
                      <p><FontAwesomeIcon icon={faPlay} /></p>
                    </div>
                    <div className="disp-tab-cell video-text">
                    <h4>London Dairy</h4>
                    <p>Introducing Cookies & Cream Ice Cream</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={videoBanner} alt="Mirror Edge"/>
                  <div className="video-info disp-tab">
                    <div className="disp-tab-cell video-icon">
                      <p><FontAwesomeIcon icon={faPlay} /></p>
                    </div>
                    <div className="disp-tab-cell video-text">
                    <h4>London Dairy</h4>
                    <p>Introducing Cookies & Cream Ice Cream</p>
                    </div>
                  </div>
                </div>
            </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="footer pad-t-md pad-b-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={logo} className="width100" />
            </div>
            <div className="col-md-2 footer-header pad-l-zero">
              <h4>Our Story</h4>
            </div>
            <div className="col-md-2 footer-header pad-l-zero">
              <h4>Products</h4>
              <ul>
                <li>Cakes & Cookies</li>
                <li>Nuts</li>
                <li>Classics</li>
                <li>Caramel</li>
                <li>Chocolate</li>
                <li>Fruits</li>
                <li>Healthy</li>
              </ul>
            </div>
            <div className="col-md-2 footer-header pad-l-zero">
              <h4>Recipes</h4>
              <ul>
                <li>Birthday</li>
                <li>Anniversary</li>
                <li>House Party</li>
                <li>Theme</li>
                <li>Holiday</li>
              </ul>
            </div>
            <div className="col-md-2 footer-header pad-l-zero">
              <h4>Flovour Stories</h4>
            </div>
            <div className="col-md-2 footer-header pad-l-zero">
              <h4>Contact Us</h4>
              <h4>Phone</h4>
              <ul>
                <li>+91 99309 99165</li>
                <li>+91 99309 99165</li>
              </ul>
              <h4>Address</h4>
              <ul>
                <li>Block No : 14, Raghuvanshi Mills, Lower Parel, Mumbai 400013</li>
              </ul>
              <h4>Email</h4>
              <ul>
                <li>info@londondairy.com</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-3 col-md-6 text-center">
              <div className="width100">
                <form className="subscribe-form disp-tab width100">
                  <div className="disp-tab-cell">
                    <h4 className="mar-zero">SUBSCRIBE</h4>
                  </div>
                  <div className="disp-tab-cell">
                    <input placeholder="Enter Your Name" className="disp-tab-cell" type="text"></input>
                  </div>
                  <div className="disp-tab-cell">
                    <button><FontAwesomeIcon icon={faChevronRight} /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row pad-t-md">
            <div className="width100 text-center share-icons ">
              <ul className="share-icons">
                <li>Share Us</li>
                <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
              </ul>
            </div>
          </div>
          <div className="row text-center pad-t-sm">
            <p className="xsm mar-zero width100 tc-white">Prifvacy | Terms & Conditions | Feedback | © 2019  Copyrigts</p>
          </div>
        </div>
      </section>
    </div>
  );
}

