import React from "react";

// my components
import { Slider } from "../components/Slider";

// images
import HOME_IMG from "../Assets/images/home_image.jpg";
import SLIDER_1 from "../Assets/images/slider_1.jpg";
import SLIDER_2 from "../Assets/images/slider_2.jpg";
import SLIDER_3 from "../Assets/images/slider_3.jpg";
import SLIDER_4 from "../Assets/images/slider_4.jpg";
import SLIDER_5 from "../Assets/images/slider_5.jpg";

const cardImages = [SLIDER_1, SLIDER_2, SLIDER_3, SLIDER_4, SLIDER_5];

export const Home = () => {
  return (
    <>
      <section id="first-section">
        <h1>One perfect photo is worth hundreds of bookings.</h1>
        <img className="home-img" src={HOME_IMG} alt="bali interior hotel" />
      </section>

      <section id="second-section">
        <Slider cardImages={cardImages} />
      </section>

      <section id="third-section"></section>

      <section id="fourth-section"></section>
    </>
  );
};
