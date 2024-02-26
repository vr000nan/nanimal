import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'
import './ModalStyles/skillsStyles.css'

const Skills = ({ closeFn = () => null, open = false }) => {
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsData = [
    { imageUrl: "/PlaceholderAbout.png", text: "JavaScript" },
    { imageUrl: "/PlaceholderAbout.png", text: "HTML5/CSS" },
    { imageUrl: "/PlaceholderAbout.png", text: "React" },
    { imageUrl: "/PlaceholderAbout.png", text: "SQL" },
    { imageUrl: "/PlaceholderAbout.png", text: "Java" },
    { imageUrl: "/PlaceholderAbout.png", text: "PHP" },
    { imageUrl: "/PlaceholderAbout.png", text: "Agile Methodologies" },
    { imageUrl: "/PlaceholderAbout.png", text: "Amazon Web Services" },
    { imageUrl: "/PlaceholderAbout.png", text: "Wordpress" },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">

          <div className="modal--body">

            <h1>Skills

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <section className="images-container">
              {skillsData.map((item, index) => (
                <div
                  key={index}
                  className="image-container"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{ height: `calc(100% / 3 - 20px)` }} // Adjust height for three rows with gap
                >
                  <img src={item.imageUrl} alt={`Image ${index + 1}`} />
                  {hoveredIndex === index && (
                    <div className="overlay">
                      <h2>{item.text}</h2>
                    </div>
                  )}
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Skills;
