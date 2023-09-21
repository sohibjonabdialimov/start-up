import React from "react";
import search from "../../assets/MagnifyingGlass.svg";
import "./style.css";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import left from "../../assets/ArrowLeft2.svg";
import right from "../../assets/ArrowRight.svg";
import Card from "../Card/Card";
const CoursesCards = () => {
  const arr = [
    {
      id: 1,
      img: img1,
      title: "Learn Ethical Hacking",
      paragraph: "31. Learn More About",
    },
    {
      id: 2,
      img: img2,
      title: "SQL for NEWBS: Weekender",
      paragraph: "165. Font Properties Challenge",
    },
    {
      id: 3,
      img: img3,
      title: "Complete Adobe Lightroom ",
      paragraph: "7. Adding Content to Our",
    },
    {
      id: 4,
      img: img4,
      title: "Machine Learning A-Z™: Hands-On ",
      paragraph: "651. CSS Font Property",
    },
    {
      id: 5,
      img: img1,
      title: "Learn Ethical Hacking From ",
      paragraph: "31. Learn More About",
    },
    {
      id: 7,
      img: img3,
      title: "Complete Adobe Lightroom ",
      paragraph: "7. Adding Content to Our",
    },
    {
      id: 6,
      img: img2,
      title: "SQL for NEWBS: Weekender Crash",
      paragraph: "165. Font Properties Challenge",
    },
    {
      id: 8,
      img: img4,
      title: "Machine Learning A-Z™: Hands-On ",
      paragraph: "651. CSS Font Property ",
    },
    {
      id: 9,
      img: img1,
      title: "Learn Ethical Hacking From",
      paragraph: "31. Learn More About Web ",
    },
    {
      id: 10,
      img: img2,
      title: "SQL for NEWBS: Weekender Crash",
      paragraph: "165. Font Properties ",
    },
    {
      id: 11,
      img: img3,
      title: "Complete Adobe Lightroom",
      paragraph: "7. Adding Content to Our",
    },
    {
      id: 12,
      img: img4,
      title: "Machine Learning A-Z™: Hands-On",
      paragraph: "651. CSS Font Property ",
    },
  ];
  return (
    <div className="course_cards">
      <h2>Courses (957)</h2>
      <div className="form_wrap">
        <label htmlFor="search">
          Search:
          <div className="search_course">
            <img src={search} alt="" />
            <input
              id="search"
              type="text"
              placeholder="Search in your courses..."
            />
          </div>
        </label>
        <label htmlFor="sort">
          Sort by:
          <select id="sort">
            <option value="latest">latest</option>
            <option value="7">7</option>
          </select>
        </label>
        <label htmlFor="status">
          Status:
          <select id="status">
            <option value="all">All Courses</option>
            <option value="Course">Course</option>
          </select>
        </label>
        <label htmlFor="teacher">
          Teacher:
          <select id="teacher">
            <option value="all">All Teachers</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
      </div>

      <div className="cards">
        {arr.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="pagination_wrap">
        <button>
          <img className="left" src={left} alt="" />
        </button>
        <button>01</button>
        <button>02</button>
        <button className="active">03</button>
        <button>04</button>
        <button>05</button>
        <button>
          <img className="right" src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CoursesCards;
