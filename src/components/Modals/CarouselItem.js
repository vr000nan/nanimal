import React from "react";
import './ModalStyles/samplesStyles.css';

const CarouselItem = ({ i }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={i.icon} />
            <div className="carousel-item-text">
            <h2>{i.title}</h2>
            <p>{i.description}</p>
            <a className="carousel-item-link">{i.live}</a>
            <a className="carousel-item-link">{i.code}</a>
            </div>
        </div>
    )
}

export default CarouselItem;