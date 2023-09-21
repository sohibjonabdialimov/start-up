import React from 'react'
import "./style.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <a className='active' href="">Home</a>
        </li>
        <li>
          <a href="">Courses</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Become an Instructor</a>
        </li>
      </ul>
      <div className="selects">
        <select>
          <option value="usd">USD</option>
          <option value="ru">Ru</option>
        </select>
        <select>
          <option value="english">English</option>
          <option value="uzbek">Uzbek</option>
        </select>
      </div>
    </nav>
  )
}

export default Navbar