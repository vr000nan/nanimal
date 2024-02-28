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
      title: "Art Collector",
      description: "A React.js database made using an API from Harvard Art Museums.",
      live: <a href="https://wroblewski-art-collector-react.netlify.app/" target="_blank">Live Site</a>,
      code: <a href="https://github.com/vr000nan/UNIV_Art_Collector_React_Starter" target="_blank">View Code</a>,
      icon: "horse.png"
    },
    {
      title: "Retro Draw",
      description: "A simple pixel art app made using Javascript.",
      live: <a href="https://wroblewski-retro-draw.netlify.app/" target="_blank">Live Site</a>,
      code: <a href="https://github.com/vr000nan/Retro-Draw" target="_blank">View Code</a>,
      icon: "retro.png"
    },
    {
      title: "Snake",
      description: "The classic computer game Snake! Made in Javascript.",
      live: <a href="https://wroblewski-snake.netlify.app/" target="_blank">Live Site</a>,
      code: <a href="https://github.com/vr000nan/Snake" target="_blank">View Code</a>,
      icon: "snake.png"
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

            <br></br>
            <h2><a href="https://github.com/vr000nan/nanimal" target="_blank">Click Here to See the Code for nanimal.dev</a></h2>

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