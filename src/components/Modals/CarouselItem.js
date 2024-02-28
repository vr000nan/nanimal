import React from "react";

const CarouselItem = ({ i }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={i.icon} />
            <div className="carousel-item-text">
            <h2>{i.title}</h2>
            <p>{i.description}</p>
            <span>{i.live}</span>
            <span>{i.code}</span>
            </div>
        </div>
    )
}

export default CarouselItem;