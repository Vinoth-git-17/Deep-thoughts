import React from "react";

const nav = () => {
  return (
    <div className="navbar">
      <a href="">
        <img
          className="nav-logo"
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />
      </a>
      <ul class="nav-items">
        <li>
          <a href="">
            <img className="icon-home" src="../images/home.png" alt="" />
          </a>{" "}
        </li>
        <li>
          <a href="">
            <img className="icon-tool" src="../images/tool.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon-bell" src="../images/Vector.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon-profile" src="../images/profile.png" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="icon-dot" src="../images/dot.png" alt="" />
            <img className="icon-dot1" src="../images/dot.png" alt="" />
            <img className="icon-dot2" src="../images/dot.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default nav;
