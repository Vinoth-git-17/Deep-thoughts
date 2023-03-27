import React from "react";

const article = () => {
  return (
    <div>
      <div>
        <b className="title">Title</b>
        <textarea className="title-input" type="text" />
        <b className="content">Content</b>
        <div>
          <div className="menus">
            <ul className="menu-item">
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Insert</li>
              <li>Format</li>
              <li>Tools</li>
              <li>Table</li>
              <li>Help</li>
            </ul>
            <ul className="menu-item-1">
              <li>
                <img src="../images/arrow-curve-left-right.png" alt="" />{" "}
              </li>
              <li>
                <img src="../images/arrow-curve-left-down.png" alt="" />
              </li>
              <li>
                <img src="../images/arrow-expand-02.png" alt="" />
              </li>

              <li>
                <img src="../images/dots.png" alt="" />
              </li>
              <li>
                <span className="menu-item">Paragraph</span>
              </li>
            </ul>
          </div>
          <div>
            <textarea className="text-field" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default article;
