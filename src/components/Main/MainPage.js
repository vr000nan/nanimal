import React from "react";
// import { Route, Switch } from 'react-router-dom';

const MainPage = ({}) => {

    return(
        <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-samples">
          Samples
        </button>
        <button type="button" data-modal="modal-history">
          History
        </button>
        <button type="button" data-modal="modal-about">
          About
        </button>
        <button type="button" data-modal="modal-skills">
          Skills
        </button>
        <button type="button" data-modal="modal-contact">
          Contact
        </button>
        </div>
    )
}

export default MainPage;