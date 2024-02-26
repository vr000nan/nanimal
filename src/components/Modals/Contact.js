import React, { useEffect } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'

const Contact = ({ closeFn = () => null, open = false }) => {
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
            <h1>Contact
              <button type="button" onClick={closeFn}>
                X
              </button>
            </h1>
            
              <section>
                <div className="contact-container">
                  <form className="contact-form">
                    <input type="text" placeholder="Your Name" name="user_name" required />
                    <input type="email" placeholder="Your Email Address" name="user_email" required />
                    <input type="text" placeholder="Hello Nan! Let's Get in Touch!" name="subject" required />
                    <textarea name="message" cols="30" rows="10">
                    </textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </section>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Contact;