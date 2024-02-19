import React from "react";

const CarouselItem = ({ i }) => {
    return (
        <div className="carousel-item">
            <div></div>
            <img className="carousel-img" src={i.icon} />
            <div className="carousel-item-text">{i.description}</div>
        </div>
    )
}

export default CarouselItem;