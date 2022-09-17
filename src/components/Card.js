import React from "react";
import PropTypes from 'prop-types';

export const Card = (props) => {
    const { image } = props;
    return (
        <div className="card">
            <img src={image} alt="hotel" />
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
}