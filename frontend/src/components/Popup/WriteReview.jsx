import React from "react";
import ImgIconCross from "../../assets/img/icon-cross.svg";
import ImgReaction0 from "../../assets/img/reaction-0.svg";
import ImgReaction1 from "../../assets/img/reaction-1.svg";
import ImgReaction2 from "../../assets/img/reaction-2.svg";
import ImgReaction3 from "../../assets/img/reaction-3.svg";

const WriteReview = () => {
  return (
    <section class="popup">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img src={ImgIconCross} class="cross" alt="" />
            <h2>Write Review</h2>
            <p>Choose your thought</p>
            <ul class="reactions">
              <li>
                <img src={ImgReaction1} alt="" />
              </li>
              <li>
                <img src={ImgReaction2} alt="" />
              </li>
              <li>
                <img src={ImgReaction3} alt="" />
              </li>
              <li>
                <img src={ImgReaction0} alt="" />
              </li>
            </ul>
            <input type="text" name="name" placeholder="Enter your name" />
            <textarea name="body" placeholder="Enter your review"></textarea>
            <button>Send Review</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteReview;
