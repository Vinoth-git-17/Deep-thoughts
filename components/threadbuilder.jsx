import React from "react";

const threadbuilder = () => {
  return (
    <div>
      <img className="arrow" src="../images/arrow.png" alt="" />
      <h2 className="thread">ThreadA</h2>

      <div className="threadA-content">
        <div className="bg-layer">
          <h1 className="sub-heading">
            <b>SubThread 1</b>
          </h1>

          <textarea
            placeholder="Enter a text"
            className="upper-layer"
          ></textarea>
        </div>
        <div className="bg-layer-1">
          <h1 className="sub-heading">
            <b>Sub Interpretation 1</b>
          </h1>

          <textarea
            placeholder="Enter a text"
            className="upper-layer"
          ></textarea>
        </div>

        <div>
          <ul className="thread-icons">
            <li>
              <a href="">
                <img src="../images/bulb.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../images/comment.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../images/question.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../images/flower.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="thread-btn">+ Subthread</button>
        </div>
        <div className="summary">
          <h2 className="summary-text">Summary for Subthread A</h2>
          <textarea
            className="summary-input"
            placeholder="Enter a text"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default threadbuilder;
