import React from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'

const Experience = ({ closeFn = () => null, open = false }) => {
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
               <h1>Experience</h1>
              </header>
            <div className="modal--body">
              <p>Experience</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default Experience;