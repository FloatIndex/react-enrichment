import React from "react";
import PropTypes from 'prop-types';

export const Card = ({ bgColor, image, alt }) => {

    return (
        <div
            className="card-container"
            style={{backgroundColor: bgColor}}>
            <img className="card" src={image} alt={alt} />
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    bgColor: PropTypes.string,
}