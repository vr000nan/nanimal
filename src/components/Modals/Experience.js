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
            <h1>A Few Things I've Done...

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <div className="cards-container">
              <AlternatingInfoCard
                info={<>
                  <h2>Rise Marketing - UI/UX Developer</h2>
                  <span>August 2023 - Present</span>
                  <p>I excel in creating engaging web experiences that users love, blending my expertise in JavaScript and PHP with a keen eye for design. I'm passionate about crafting dynamic interfaces using frameworks like React, ensuring they're not just functional but delightful to use. Whether it's implementing responsive design principles or fine-tuning every interaction, my goal is to create web interfaces that leave users smiling.</p>
                  </>}
                image="riseLogo.png"
                altText="Rise Marketing Logo"
                reverse={false}
              />
              <AlternatingInfoCard
                info={<>
                <h2>JP Morgan Chase & Co. - Software Engineer 1</h2>
                <span>October 2022 - July 2023</span>
                <p>I've had the pleasure of working closely with software teams, where we put our heads together to craft solutions that not only meet but exceed client expectations. My toolkit includes React, Java, SpringBoot, and Typescript, which I wield with expertise to create robust and innovative solutions. With a focus on top-notch code quality, my aim is to not just meet requirements, but to create software that truly shines.</p>
                </>}
                image="chaseLogo.png"
                altText="JP Morgan Chase & Co. Logo"
                reverse={true}
              />
              <AlternatingInfoCard
                info={<>
                  <h2>Fullstack Academy - Mentor II</h2>
                  <span>January 2022 - Present</span>
                  <p>I've taken a hands-on approach to maintain high grading standards, ensuring that every student gets the support they need to thrive. Together with colleagues, we've brainstormed and implemented curriculum enhancements to keep things fresh and relevant. By conducting detailed progress assessments, I've been able to tailor support and drive continuous improvement, ultimately helping students make successful transitions into the tech industry.</p>
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