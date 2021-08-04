import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import Item from "../components/Common/Item";
import { fetchPosts } from "../reducks/posts/operations";
import { getPosts } from "../reducks/posts/selectors";
import ImgMainImage from "../assets/img/main-image.png";

const Home = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
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
            <Item key={1} />
          </li>
          <li>
            <Item key={2} />
          </li>
          <li>
            <Item key={3} />
          </li>
          <li>
            <Item key={4} />
          </li>
        </ul>
      </section>

      <Footer price={175} isCartPage={true} />

      {showWriteReview && <PopupWriteRevew />}
      {showReviews && <PopupRevews />}
    </div>
  );
};

export default Home;
