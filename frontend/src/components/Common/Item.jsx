import React from "react";
import ImgSampleImage from "../../assets/img/sample-image.png";
import ImgIconHeart from "../../assets/img/icon-heart.svg";

const Item = ({ item, selected_count }) => {
  return (
    <>
      <img src={item.image} class="item-image" alt="" />
      <div class="info">
        <div class="name">{item.name}</div>
        <div class="name-bottom">
          <img src={ImgIconHeart} class="icon-heart" alt="" />
          <div class="count">(16)</div>
          <button class="link-button">Check Reviews</button>
          <button class="link-button">Write Reviews</button>
        </div>
        <div class="info-bottom">
          <div class="price">${item.price}</div>
          {selected_count == 0 ? (
            <div class="add">Add +</div>
          ) : (
            <div class="number">
              <span class="minus">－</span>
              <span class="count">{selected_count}</span>
              <span class="plus">+</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
