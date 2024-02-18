import React from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'
import './ModalStyles/aboutStyles.css';

const About = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
                <button className="modal--x" type="button" onClick={closeFn}>
                  X
                </button>
              <h1>About</h1>
            </header>
            <div className="modal--body">
            <img src="/PlaceholderAbout.png" alt="aboutImage" className="about-image" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Viverra aliquet eget sit amet tellus cras. Sit amet est placerat in egestas erat imperdiet. 
                Lacus vestibulum sed arcu non odio. Augue neque gravida in fermentum et. 

                <br></br>
                
                Lacinia quis vel eros donec ac odio. Ac ut consequat semper viverra nam libero justo laoreet. P
                orta lorem mollis aliquam ut. Ornare arcu dui vivamus arcu felis. Vel eros donec ac odio tempor orci dapibus ultrices. 
                Adipiscing vitae proin sagittis nisl rhoncus. Tortor id aliquet lectus proin nibh. </p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default About;