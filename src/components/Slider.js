// react components
import React from "react";
import PropTypes from 'prop-types';

// my components
import { Card } from "./Card";

export const Slider = (props) => {
    const { cardImages } = props;
    return (
        <>
            {cardImages.map((cardImage, index) => 
                <Card key={index} image={cardImage}/>
            )}
            <i className="fa-solid fa-cutlery"></i>
        </>
    )
}

Slider.propTypes = {
    cardImages: PropTypes.array,
}
