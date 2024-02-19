import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css';
import './ModalStyles/samplesStyles.css';
import CarouselItem from "./CarouselItem";

const Samples = ({ closeFn = () => null, open = false }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal--mask')) {
        closeFn();
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeFn, open]);

  // Carousel Stuff
  const sampleItems = [
    {
      title: "Item 1",
      description: "Brief Description",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 2",
      description: "Brief Description 2",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 3",
      description: "Brief Description 3",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 3",
      description: "Brief Description 4",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 5",
      description: "Brief Description 5",
      icon: "PlaceholderAbout.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">

          <div className="modal--body">

            <h1>Samples

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <div className="samplesCarousel">
              <div className="innerCarousel"
                style={{transform: `translate:(-${activeIndex * 100})`}}
              >
                  {sampleItems.map((i) => {
                    return <CarouselItem i={i}/>
                  })}
              </div>

              <div className="carousel-buttons">
                  <button className="button-arrow">
                  <span class="material-symbols-outlined">arrow_back_ios</span>
                  </button>
                  <div className="carousel-indicators">
                    <button className="indicator-buttons">
                    <span class="material-symbols-outlined">radio_button_checked</span>
                    </button>
                  </div>
                  <button className="button-arrow">
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                  </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Samples;