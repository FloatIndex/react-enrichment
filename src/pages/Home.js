import React from "react";

// my components
import { Slider } from "../components/Slider";

// images
import HOME_IMG from "../Assets/images/home_image.jpg";
import SLIDER_2 from "../Assets/images/slider_2.jpg";
import SLIDER_1 from "../Assets/images/slider_1.jpg";

const cardImages = [SLIDER_1, SLIDER_2];

export const Home = () => {
  return (
    <>
      <section id="first-section">
        <h1>Make a splash.</h1>
        <h4>Ever been blown away by a hotel brand?</h4>
        <h4>
          From concept to visuals: we sketch and script the story of your hotel.
        </h4>
        <img className="home-img" src={HOME_IMG} alt="bali interior hotel" />
      </section>

      <section id="second-section">
        <Slider cardImages={cardImages} />
      </section>

      <section id="third-section"></section>

      <section id="fourth-section"></section>
    </>
  );
}
