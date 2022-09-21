import React from "react";
import PropTypes from 'prop-types';

export const Card = ({ image, alt }) => {

    return (
        <div className="card-container">
            <img className="card" src={image} alt={alt} />
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
}