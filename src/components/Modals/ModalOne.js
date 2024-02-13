import React from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'

const ModalOne = ({ closeFn = () => null, open = false }) => {
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
               <h1>Modal One</h1>
              </header>
            <div className="modal--body">
              <p>Modal One content will be rendered here.</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default ModalOne;