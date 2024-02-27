import React, { useEffect } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css';
import './ModalStyles/experienceStyles.css'

function AlternatingInfoCard({ info, image, altText, reverse }) {
  return (
    <div className={`info ${reverse ? 'reverse' : ''}`}>
      <img src={image} alt={altText} />
      <p>{info}</p>
    </div>
  );
}

const Experience = ({ closeFn = () => null, open = false }) => {
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

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">

          <div className="modal--body">
            <h1>My Work History

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <div className="cards-container">
              <AlternatingInfoCard
                info="Info 1: Text giving context."
                image="riseLogo.png"
                altText="Image 1"
                reverse={false}
              />
              <AlternatingInfoCard
                info="Info 2: Text giving context."
                image="chaseLogo.png"
                altText="Image 2"
                reverse={true}
              />
              <AlternatingInfoCard
                info="Info 3: Text giving context."
                image="fsaLogo.png"
                altText="Image 3"
                reverse={false}
              />
            </div>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Experience;