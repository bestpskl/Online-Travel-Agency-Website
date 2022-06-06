import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./Hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-guest-room-1498-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-royal-lounge-1477-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-lobby-1959-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-swimming-pool-1849-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-place-1825-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*",
    },
    {
      src: "https://cache.marriott.com/content/dam/marriott-renditions/BKKLA/bkkla-meeting-7872-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Athenee Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              61 Wireless Road (Witthayu), Lumpini, Pathumwan, Bangkok,
              Thailand, 10330
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - 300m from BTS Ploenjit
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ฿30000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                A Luxury Collection Hotel in Bangkok
              </h1>
              <p className="hotelDesc">
                Beautiful rooms and suites are modern yet inspired by Thai
                culture with thoughtful touches in its design. The Athenee
                Hotel, a Luxury Collection Hotel, Bangkok is located in the most
                central area of Bangkok, steps from the Skytrain connecting
                directly to Bangkok's premium shopping malls and local
                attractions. Built on the grounds of Kandhavas, the palace of
                Princess Valaya Alongkorn daughter of King Rama V, our stunning
                5-star hotel encapsulates elegance and luxury. Whether you are
                savoring the sumptuous cuisine at one of our eight restaurants
                and bars, indulging in the holistic treatments at Athenee Spa or
                taking a dip in our free-form rooftop pool, you will have an
                unsurpassed experience. And with a location on Wireless Road in
                the heart of Bangkok, The Athenee Hotel is ideally situated for
                families and couples enjoying a city break as well as being
                perfect for business, events and iconic weddings.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located near BTS Ploenjit, this property has an excellent
                location score of 9.4!
              </span>
              <h2>
                <b>฿112500</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
