import React from "react";
import './mainPageStyles.css';
import '../Resume/resumeStyles.css';
import PDFFile from "../Resume/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const MainPage = ({}) => {

    return(
        <div className="container">
          <button type="button" data-modal="modal-samples" class="cybr-btn button-1">
            samples
            <span aria-hidden class="cybr-btn__glitch">sǝʅdɯɐs</span>
          </button>
          <button type="button" data-modal="modal-history" class="cybr-btn button-2">
            history
            <span aria-hidden class="cybr-btn__glitch">ʎɹoʇsᴉɥ</span>
          </button>
          
          <button type="button" data-modal="modal-about" class="cybr-btn button-3">
            about
            <span aria-hidden class="cybr-btn__glitch">ʇnoqɐ</span>
          </button>
          <img src="/Placeholder.png" alt="mainImage" className="main-image" />
          <button type="button" data-modal="modal-skills" class="cybr-btn button-4">
            skills
            <span aria-hidden class="cybr-btn__glitch">sʅʅᴉʞs</span>
          </button>
          <button type="button" data-modal="modal-contact" class="cybr-btn button-5">
            contact
            <span aria-hidden class="cybr-btn__glitch">ʇɔɐʇuoɔ</span>
          </button>

            <PDFDownloadLink document={<PDFFile/>} fileName="Nan-Resume">
              <button className="resume-btn">View My Resume</button>
            </PDFDownloadLink>
        </div>
    )
}

export default MainPage;
