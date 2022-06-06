import React from "react";

import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media.cntraveler.com/photos/61e3997ac5df30b76eb274b0/master/w_1920%2Cc_limit/The%2520Athenee%2520Hotel%2C%2520a%2520Luxury%2520Collection%2520Hotel%2C%2520Bangkok.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Athenee Hotel</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpName">Starting from ฿7500</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.cntraveler.com/photos/608b8313e3de38981e2299ae/master/w_1920%2Cc_limit/BPY_276.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpName">Starting from ฿10500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.cntraveler.com/photos/61e39ab653ba99134710b14a/master/w_1920%2Cc_limit/Siam-Kempinski-Hotel-Bangkok.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Siam Kempinski Hotel</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpName">Starting from ฿12500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
