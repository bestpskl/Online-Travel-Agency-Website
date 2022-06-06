import React from "react";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn-cms.pgimgs.com/news/2021/03/Real-estate-in-Pattaya-between-pandemic.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pattaya</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://a.cdn-hotels.com/gdcs/production106/d607/852e809f-f614-40a7-80a0-88ca9cc97065.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bangkok</h1>
          <h2>456 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://a.cdn-hotels.com/gdcs/production9/d679/184d7edf-5c3a-470c-8529-b0085d6d5b0e.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chiang Mai</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
