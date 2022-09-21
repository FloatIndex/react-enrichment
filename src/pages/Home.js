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

const cardImages = [SLIDER_1, SLIDER_2, SLIDER_3, SLIDER_4, SLIDER_5];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
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
          centerMode={false}
          draggable={true}
          focusOnSelect={true}
          infinite
          keyBoardControl
          responsive={responsive}
          shouldResetAutoplay
          slidesToSlide={0.5}
          swipeable
        >
          {cardImages.map((cardImage, index) => 
            <Card  key={index} image={cardImage} alt="hotel view"/>
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
