import React, { useState } from 'react';

import ModalManager from './components/Modals/ModalManager';
import PreLoader from './components/Preloader/PreLoader';

import './App.css';
import MainPage from './components/Main/MainPage';

function App() {
  const[modalOpen, setModal] = useState(false);

  const openModal = event => {
    const { target: { dataset: { modal }}} = event
    if (modal) setModal(modal)
  };

  const closeModal = () => {
    setModal('')
  }

  return (
   <>
    <PreLoader />
    <div className='app--shell' onClick={openModal}>
      <MainPage />
      <ModalManager closeFn={closeModal} modal={modalOpen}/>
      {/* RESUME BUTTON */}
    </div>

   </>

  );
}

export default App;
