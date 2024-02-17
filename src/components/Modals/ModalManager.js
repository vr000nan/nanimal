import React from "react";
import Samples from "./Samples";
import History from "./Experience";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const ModalManager = ({
    closeFn = () => null,
    modal = ''
}) => {

    return(
        <>
        <Samples 
            closeFn={closeFn}
            open={modal === 'modal-samples'}
        />

        <History 
            closeFn={closeFn}
            open={modal === 'modal-experience'}
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