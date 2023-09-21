import React from "react";
import "./style.css";
import logo from "../../assets/footerLogo.svg";
import facebook from "../../assets/facebook.svg";
import Instragarm from "../../assets/Instragarm.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import youtube from "../../assets/youtube.svg";
import app1 from "../../assets/app1.svg";
import app2 from "../../assets/app2.svg";
const Footer = () => {
  return (
    <footer className="footer_wrap">
      <div className="footer_content">
        <div className="footer_main">
          <div className="footer_logo">
            <img className="footer_img" src={logo} alt="" />
            <p>
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="social_wrap">
              <button>
                <img src={facebook} alt="" />
              </button>
              <button>
                <img src={Instragarm} alt="" />
              </button>
              <button>
                <img src={Linkedin} alt="" />
              </button>
              <button>
                <img src={Twitter} alt="" />
              </button>
              <button>
                <img src={youtube} alt="" />
              </button>
            </div>
          </div>
          <div className="footer_category">
            <div className="category_wrap">
              <h3>Top 4 Category</h3>
              <p>Development</p>
              <p>Finance & Accounting</p>
              <p>Design</p>
              <p>Business</p>
            </div>
            <div className="category_wrap">
              <h3>Quick Links</h3>
              <p>About</p>
              <p>Become Instructor</p>
              <p>Contact</p>
              <p>Career</p>
            </div>
            <div className="category_wrap">
              <h3>Support</h3>
              <p>Help Center</p>
              <p>FAQs</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
            <div className="category_wrap">
              <h3>Downlaod our app</h3>
             <img className="app1" src={app1} alt="" />
             <img className="app2" src={app2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_extra">
        <div className="extra_wrap">
          <p>© 2021 - Eduflex. Designed by <span>Templatecookie</span>. All rights reserved</p>
          <select>
            <option value="eng">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
