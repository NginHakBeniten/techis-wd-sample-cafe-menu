import React from "react";
import ImgSampleImage from "../../assets/img/sample-image.png";
import ImgIconHeart from "../../assets/img/icon-heart.svg";

const Item = () => {
  return (
    <>
      <img src={ImgSampleImage} class="item-image" alt="" />
      <div class="info">
        <div class="name">Chicken Makhani Burst + Lite</div>
        <div class="name-bottom">
          <img src={ImgIconHeart} class="icon-heart" alt="" />
          <div class="count">(16)</div>
          <button class="link-button">Check Reviews</button>
          <button class="link-button">Write Reviews</button>
        </div>
        <div class="info-bottom">
          <div class="price">$16</div>
          <div class="add">Add +</div>
        </div>
      </div>
    </>
  );
};

export default Item;
