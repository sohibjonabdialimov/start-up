import React from "react";
import "./style.css";
import photos from "../../assets/Photos.svg";
import arrow from "../../assets/ArrowRight.svg";
const StudentCourses = () => {
  return (
    <div className="hero">
      <div className="hero_wrap">
        <div className="hero_content">
          <div className="hero_desc">
            <img src={photos} alt="" />
            <div className="hero_title">
              <h3>Kevin Gilbert</h3>
              <p>Web Designer & Best-Selling Instructor</p>
            </div>
          </div>
          <div className="hero_btn">
            <button>Become Instructor</button>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="hero_navbar">
          <a href="#">Dashboard</a>
          <a href="#">Courses</a>
          <a href="#">Teachers</a>
          <a href="#">Message</a>
          <a href="#">Wishlist</a>
          <a href="#">Purchase History</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </div>

  );
};

export default StudentCourses;
