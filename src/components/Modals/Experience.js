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
                info={<>
                  <h2>Rise Marketing - UI/UX Developer</h2>
                  <span>October 2022 - July 2023</span>
                  <p>Utilize JavaScript and PHP expertise to craft dynamic, user-centric web interfaces, 
                    adeptly employing frameworks like React, conducting rigorous testing, and implementing responsive design principles to ensure optimal functionality 
                    and user satisfaction across diverse platforms and devices.</p>
                  </>}
                image="riseLogo.png"
                altText="Rise Marketing Logo"
                reverse={false}
              />
              <AlternatingInfoCard
                info={<>
                <h2>JP Morgan Chase & Co. - Software Engineer 1</h2>
                <span>October 2022 - July 2023</span>
                <p>Collaborated with software teams to design, develop, and optimize robust solutions meeting client requirements, 
                  while leading cross-functional teams to implement cutting-edge software, ensuring top-notch code quality, modernizing legacy systems,
                   and demonstrating expertise in React, Java, SpringBoot, and Typescript.</p>
                </>}
                image="chaseLogo.png"
                altText="JP Morgan Chase & Co. Logo"
                reverse={true}
              />
              <AlternatingInfoCard
                info={<>
                  <h2>Fullstack Academy - Mentor II</h2>
                  <span>October 2022 - July 2023</span>
                  <p>Proactively ensured adherence to grading standards, provided dedicated mentorship to coding bootcamp students,
                     collaborated on curriculum enhancements, and conducted thorough progress assessments to drive continuous improvement and 
                     successful transitions into the tech industry.</p>
                  </>}
                image="fsaLogo.png"
                altText="Fullstack Academy Logo"
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