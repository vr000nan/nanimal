import React from "react";
import ModalOne from "./ModalOne";
import Samples from "./Samples";
import History from "./History";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const ModalManager = ({
    closeFn = () => null,
    modal = ''
}) => {

    return(
        <>
        <ModalOne 
            closeFn={closeFn}
            open={modal === 'modal-one'}
        />

        <Samples 
            closeFn={closeFn}
            open={modal === 'modal-samples'}
        />

        <History 
            closeFn={closeFn}
            open={modal === 'modal-history'}
        />

        <About 
            closeFn={closeFn}
            open={modal === 'modal-about'}
        />

        <Skills
            closeFn={closeFn}
            open={modal === 'modal-skills'}
        />

        <Contact
            closeFn={closeFn}
            open={modal === 'modal-contact'}
        />

        </>
    )
}

export default ModalManager;