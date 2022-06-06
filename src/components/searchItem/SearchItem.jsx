import React from "react";

import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://media.cntraveler.com/photos/61e3997ac5df30b76eb274b0/master/w_1920%2Cc_limit/The%2520Athenee%2520Hotel%2C%2520a%2520Luxury%2520Collection%2520Hotel%2C%2520Bangkok.jpeg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">
          The Athenee Hotel, A Luxury Collection Hotel, Bangkok
        </h1>
        <span className="siDistance">300m from BTS Ploenjit</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Luxury room with Air conditioning</span>
        <span className="siFeatures">
          Superior Twin Room • 2 bathroom • 50m² 2 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">฿12500</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
