import React from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'

const About = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              
              <div className="modal--x">
                <button type="button" onClick={closeFn}>
                  X
                </button>
               </div>
               <h1>About</h1>
              </header>
            <div className="modal--body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Viverra aliquet eget sit amet tellus cras. Sit amet est placerat in egestas erat imperdiet. 
                Lacus vestibulum sed arcu non odio. Augue neque gravida in fermentum et. 
                Ornare aenean euismod elementum nisi quis eleifend quam. Consequat interdum varius sit amet. 
                Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nibh tortor id aliquet lectus proin nibh. 
                Arcu non odio euismod lacinia at quis risus. Nec dui nunc mattis enim ut. Purus in mollis nunc sed. Dui vivamus arcu felis bibendum ut. 
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.

                <br></br>
                
                Lacinia quis vel eros donec ac odio. Ac ut consequat semper viverra nam libero justo laoreet. P
                orta lorem mollis aliquam ut. Ornare arcu dui vivamus arcu felis. Vel eros donec ac odio tempor orci dapibus ultrices. 
                Adipiscing vitae proin sagittis nisl rhoncus. Tortor id aliquet lectus proin nibh. Maecenas ultricies mi eget mauris. 
                Aliquet nibh praesent tristique magna sit amet. Venenatis tellus in metus vulputate eu scelerisque. 
                Eget arcu dictum varius duis at consectetur. Dolor sit amet consectetur adipiscing elit duis. 
                Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Eu lobortis elementum nibh tellus molestie nunc. 
                Dolor sit amet consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default About;