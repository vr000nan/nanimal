import React from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'

const History = ({ closeFn = () => null, open = false }) => {
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
               <h1>History</h1>
              </header>
            <div className="modal--body">
              <p>History</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

export default History;