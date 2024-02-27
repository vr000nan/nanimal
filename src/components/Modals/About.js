import React, { useEffect } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'
import './ModalStyles/aboutStyles.css';

const About = ({ closeFn = () => null, open = false }) => {
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

            <h1>About Me

              <button type="button" onClick={closeFn}>
                X
              </button>

            </h1>

            <img src="/aboutImage.png" alt="About Image" className="about-image" />
            <h2>Hello world!</h2>
            <p>
            As a junior frontend developer, I'm constantly hunting for exciting new opportunities! I graduated from FSA in 2021, and have been working in tech ever since, travelling all over the continental US and honing my skills in the meantime.
            <br></br>
            <br></br>
            With a solid background in computer science and plenty of hands-on experience in UI/UX development, I like to think I bring a nice blend of techie skills and creative flair to the table. Whether I'm jazzing up user experiences with some sleek design magic or diving headfirst into tricky coding puzzles, I'm all about delivering top-notch solutions that not only get the job done but also leave a lasting impression.
            <br></br>
            <br></br>
            Let's team up and make some digital dreams come true, shall we? 
            </p>

            <div className="about-icons">
            <a href="https://www.linkedin.com/in/nan-wroblewski-09547a224/" target="_blank"><img src="/linkedinIcon.png"></img></a>
            <a href="https://github.com/vr000nan" target="_blank"><img src="/githubIcon.png"></img></a>
            <a href="https://www.instagram.com/shpa.llo.la.lia?igsh=dmRqZjlycjRiZjlm" target="_blank"><img src="/instagramIcon.png"></img></a>
            </div>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default About;
