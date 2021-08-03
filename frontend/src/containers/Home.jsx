import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import { fetchPosts } from "../reducks/posts/operations";
import { getPosts } from "../reducks/posts/selectors";
import ImgMainImage from "../assets/img/main-image.png";
import ImgSampleImage from "../assets/img/sample-image.png";
import ImgIconHeart from "../assets/img/icon-heart.svg";

const Home = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const posts = getPosts(selector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div class="home">
      <Header />

      <section class="main-visual">
        <img src={ImgMainImage} alt="" />
      </section>

      <section class="content">
        <h1>How to order?</h1>
        <p>
          Thank you for loading Cj Menu by QR code.
          <br />
          Now, you can select your items below and show your order to our waiter.
        </p>
        <ul class="category">
          <li class="active">
            <a href="">All</a>
          </li>
          <li>
            <a href="">Hot</a>
          </li>
          <li>
            <a href="">Cold</a>
          </li>
          <li>
            <a href="">Bagel</a>
          </li>
        </ul>

        <ul class="items">
          <li>
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
          </li>
          <li>
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
                <div class="number">
                  <span class="minus">－</span>
                  <span class="count">2</span>
                  <span class="plus">+</span>
                </div>
              </div>
            </div>
          </li>
          <li>
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
                <div class="number">
                  <span class="minus">－</span>
                  <span class="count">2</span>
                  <span class="plus">+</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <Footer price={175} isCartPage={false} />

      {showWriteReview && <PopupWriteRevew />}
      {showReviews && <PopupRevews />}
    </div>
  );
};

export default Home;
