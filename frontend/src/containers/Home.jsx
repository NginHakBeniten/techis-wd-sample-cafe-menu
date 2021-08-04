import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { getCarts } from "../reducks/carts/selectors";
import ImgMainImage from "../assets/img/main-image.png";
import queryString from "query-string";

const Home = () => {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);

  useEffect(() => {
    dispatch(fetchItems(parsed.category));
  }, []);

  useEffect(() => {
    console.log(items);
    console.log(carts);
    console.log(parsed);
  }, [items]);

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
            <a href="/">All</a>
          </li>
          <li>
            <a href="/?category=hot">Hot</a>
          </li>
          <li>
            <a href="/?category=cold">Cold</a>
          </li>
          <li>
            <a href="/?category=bagel">Bagel</a>
          </li>
        </ul>

        <ul class="items">
          {items &&
            items.map((item) =>
              carts && carts[item.id] ? (
                <li>
                  <Item key={item.id} item={item} selected_count={carts[item.id].selected_count} />
                </li>
              ) : (
                <li>
                  <Item key={item.id} item={item} selected_count={0} />
                </li>
              )
            )}
        </ul>
      </section>

      <Footer price={175} isCartPage={true} />

      {showWriteReview && <PopupWriteRevew />}
      {showReviews && <PopupRevews />}
    </div>
  );
};

export default Home;
