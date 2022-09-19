// react components
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

// my components
import { Card } from "./Card";

export const Slider = ({ cardImages }) => {
    const [position, setPosition] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(document.getElementsByClassName("card"));
    }, []);

    useEffect(() => {
        for(let i = 2; i < cards.length; i++) {
            cards[i].classList.add("hidden");
        }
    }, [cards.length]);

    useEffect(() => {
        console.log("position", position);
        if (cards.length > 0) {
            switch (position) {
                case 0:
                    cards[position].classList.add("hidden");
                    cards[cards.length - 2].classList.remove("hidden");
                    break;
                case cards.length - 1:
                    cards[position - 1].classList.add("hidden");
                    cards[0].classList.remove("hidden");
                    break;
                default:
                    cards[position - 1].classList.add("hidden");
                    cards[position + 1].classList.remove("hidden");
            }
            console.log("inside if");
        }
    }, [position]);

    const handleClick = (newPosition) => {
        if (newPosition < 0) {
            newPosition = cards.length - 1;
        } else if (newPosition > cards.length - 1) {
            newPosition = 0;
        }
        setPosition(newPosition);
    }

    return (
        <>
            <FontAwesomeIcon
                icon={solid('chevron-left')}
                className="slider-btn previous"
                size="lg"
                onClick={() => {
                    handleClick(position - 1)
                }}
            />

            {cardImages.map((cardImage, index) => 
                <Card key={index} image={cardImage} />
            )}

            <FontAwesomeIcon
                icon={solid('chevron-right')}
                className="slider-btn next"
                size="lg"
                onClick={() => {
                    handleClick(position + 1)
                }}
            />
        </>
    )
}

Slider.propTypes = {
    cardImages: PropTypes.array,
}
