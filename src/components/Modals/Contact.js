import React, { useEffect, useRef } from "react";
import Modal from "./Modal";
import './ModalStyles/modalStyles.css'
import './ModalStyles/contactStyles.css'
import emailjs from '@emailjs/browser';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z71ff47', 'template_f1rovdp', form.current, {
        publicKey: '-kMXpnB_FSQvQL1R-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">

          <div className="modal--body">
            <h1>Shoot Me a Message...
              <button type="button" onClick={closeFn}>
                X
              </button>
            </h1>
            
              <section>
                <div className="contact-container">
                  <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" placeholder="Your Name" name="user_name" required />
                    <input type="email" placeholder="Your Email Address" name="user_email" required />
                    <input type="text" placeholder="Hello, Nan! Let's Get in Touch!" name="subject" required/>
                    <textarea name="message" cols="30" rows="15">Write your message here!</textarea>
                    <button type="submit">SEND MESSAGE</button>
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