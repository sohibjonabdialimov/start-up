import React from "react";
import "./style.css";
import LogoImage from "../../assets/LOGO.svg";
import search from "../../assets/MagnifyingGlass.svg";
import bell from "../../assets/Bell.svg";
import cart from "../../assets/ShoppingCartSimple.svg";
import avatar from "../../assets/Avatar.svg";
import heart from "../../assets/Heart.svg";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo_wrap">
        <img className="logo_img" src={LogoImage} alt="logo image" />
        <div className="select_wrap">
          <select>
            <option value="browse">Browse</option>
            <option value="browse_1">Browse 1</option>
          </select>
          <div className="learn_search">
            <img src={search} alt="" />
            <input type="text" placeholder="What do you want learn..." />
          </div>
        </div>
      </div>
      <div className="avatar_wrap">
        <img src={bell} alt="" />
        <img src={heart} alt="" />
        <img src={cart} alt="" />
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Logo;
