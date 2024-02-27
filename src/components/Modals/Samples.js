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
      description: "Brief Description of the project. What it is, what it does...",
      tech: "tech icons used in the making",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 2",
      description: "Brief Description of the project. What it is, what it does...",
      tech: "tech icons used in the making",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 3",
      description: "Brief Description of the project. What it is, what it does...",
      tech: "tech icons used in the making",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 4",
      description: "Brief Description of the project. What it is, what it does...",
      tech: "tech icons used in the making",
      icon: "PlaceholderAbout.png"
    },
    {
      title: "Item 5",
      description: "Brief Description of the project. What it is, what it does...",
      tech: "tech icons used in the making",
      icon: "PlaceholderAbout.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    let nextIndex = newIndex;
    if (newIndex < 0) {
      nextIndex = sampleItems.length - 1; // Go to the last item if newIndex is less than 0
    } else if (newIndex >= sampleItems.length) {
      nextIndex = 0; // Go to the first item if newIndex is greater than or equal to the length of sampleItems
    }
  
    setActiveIndex(nextIndex);
  };

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">

          <div className="modal--body">

            <h1>A Few Things I've Made...

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <div className="samplesCarousel">
              <div className="innerCarousel"
                style={{transform: `translate(-${activeIndex * 100}%)`}}
              >
                  {sampleItems.map((i) => {
                    return <CarouselItem i={i}/>
                  })}
              </div>

              <div className="carousel-buttons">
  <button onClick={() => {
    updateIndex(activeIndex - 1);
  }}
   className="button-arrow">
  <span className="material-symbols-outlined">arrow_back_ios</span>
  </button>
  
  <div className="carousel-indicators">
    {sampleItems.map((i, idx) => {
      return(
        <button className="indicator-buttons"
          onClick={() => {
            updateIndex(idx);
          }}
        >
        <span className={`material-symbols-outlined ${
          idx === activeIndex
          ? "indicator-symbol-active" : "indicator-symbol"
        }
        `}>•</span>
        </button>
      )
    })}
  </div>
  
  <button onClick={() => {
    updateIndex(activeIndex + 1);
  }}
   className="button-arrow">
    <span className="material-symbols-outlined">arrow_forward_ios</span>
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