import React from "react";
import Modal from "./Modal";

const ModalOne = ({ closeFn = () => null, open = false }) => {
    return (
      <Modal open={open}>
        <div className="modal--mask">
          <div className="modal-window">
            <header className="modal--header">
              <h1>Modal One</h1>
            </header>
            <div className="modal--body">
              <p>Modal One content will be rendered here.</p>
            </div>
            <footer className="modal--footer">
              <button type="button" onClick={closeFn}>
                Close
              </button>
            </footer>
          </div>
        </div>
      </Modal>
    );
  };

export default ModalOne;