import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

// my components
import { Card } from "../components/Card";

// images
import HOME_IMG from "../Assets/images/home_image.jpg";
import SLIDER_1 from "../Assets/images/slider_1.jpg";
import SLIDER_2 from "../Assets/images/slider_2.jpg";
import SLIDER_3 from "../Assets/images/slider_3.jpg";
import SLIDER_4 from "../Assets/images/slider_4.jpg";
import SLIDER_5 from "../Assets/images/slider_5.jpg";

const cardImages = [
  {
    image: SLIDER_1,
    bgColor: "#B0AF96",
  },
  {
    image: SLIDER_2,
    bgColor: "#ecdfde",
  },
  {
    image: SLIDER_4,
    bgColor: "#ecede8",
  },
  {
    image:   SLIDER_5,
    bgColor: "#d7ceeb",
  },
  {
    image: SLIDER_3,
    bgColor: "#c2d7cf",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const Home = () => {
  return (
    <>
      <section id="first-section">
        <h1>One perfect photo is worth hundreds of bookings.</h1>
        <img className="home-img" src={HOME_IMG} alt="bali interior hotel" />
      </section>

      <section id="second-section">
        <Carousel
          arrows={false}
          customTransition={"transform 500ms ease-in-out"}
          transitionDuration={500}
          centerMode={true}
          draggable={true}
          focusOnSelect={true}
          infinite
          keyBoardControl
          responsive={responsive}
          shouldResetAutoplay
          slidesToSlide={3}
          swipeable
        >
          {cardImages.map((cardImage, index) => 
            <Card
              key={index}
              image={cardImage.image}
              bgColor={cardImage.bgColor}
              alt="hotel view"
            />
          )}
        </Carousel>
        <FontAwesomeIcon
          icon={solid('chevron-left')}
          className="slider-btn previous"
          size="lg"
        />
        <FontAwesomeIcon
          icon={solid('chevron-right')}
          className="slider-btn next"
          size="lg"
        />
      </section>

      <section id="third-section"></section>

      <section id="fourth-section"></section>
    </>
  );
};
