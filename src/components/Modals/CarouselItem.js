import React from "react";

const CarouselItem = ({ i }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={i.icon} />
            <div className="carousel-item-text">{i.title}</div>
            <div className="carousel-item-text">{i.description}</div>
        </div>
    )
}

export default CarouselItem;