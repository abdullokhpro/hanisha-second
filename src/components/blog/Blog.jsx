import React from "react";
import { IoTime } from "react-icons/io5";

import "./blog.scss";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog__top">
          <h2 className="blog__title">Our blog.</h2>
          <button className="blog__btn">Go to our blog</button>
        </div>
        <div className="blog__cards">
          <div className="blog__cards__left">
            <div className="blog__cards__top">
              <div className="blog__card blog__card--top">
                <span className="blog__card__time">
                  <IoTime className="blog__card__time-icon" />
                  12.09.2021
                </span>

                <h3 className="blog__card__title">
                  How to plant spinach correctly in winter
                </h3>
                <p className="blog__card__text">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <button className="blog__card__btn">Read</button>
              </div>
            </div>
            <div className="blog__cards__bottom">
              <div className="blogs__card"></div>
              <div className="blogs__card"></div>
            </div>
          </div>
          <div className="blog__cards__right">
            <div className="blogs__card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
