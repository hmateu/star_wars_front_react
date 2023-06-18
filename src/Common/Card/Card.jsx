import React from "react";
import "./Card.css";
export const Card = ({title,height,mass,hairColor,skinColor}) => {
    return(
        <div className="cardStyle">
            <div className="commonCard cardTitle">{title}</div>
            <div className="commonCard cardHeight">Height: {height}</div>
            <div className="commonCard cardMass">Mass: {mass}</div>
            <div className="commonCard cardHairColor">Hair Color: {hairColor}</div>
            <div className="commonCard cardSkinColor">Skin Color: {skinColor}</div>
        </div>
    )
}