import React from "react";
import ModalOne from "./ModalOne";


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
        </>
    )
}

export default ModalManager;