import React from "react";
import './mainPageStyles.css';

const MainPage = ({}) => {

    return(
        <div style={{ display: 'block', columnGap: '0.3rem' }}>
          <button type="button" data-modal="modal-samples" class="cybr-btn">
            samples
            <span aria-hidden class="cybr-btn__glitch">sǝʅdɯɐs</span>
          </button>
          <button type="button" data-modal="modal-history" class="cybr-btn">
            history
            <span aria-hidden class="cybr-btn__glitch">ʎɹoʇsᴉɥ</span>
          </button>
          <img src="/Placeholder.png" alt="mainImage" />
          <button type="button" data-modal="modal-about" class="cybr-btn">
            about
            <span aria-hidden class="cybr-btn__glitch">ʇnoqɐ</span>
          </button>
          <button type="button" data-modal="modal-skills" class="cybr-btn">
            skills
            <span aria-hidden class="cybr-btn__glitch">sʅʅᴉʞs</span>
          </button>
          <button type="button" data-modal="modal-contact" class="cybr-btn">
            contact
            <span aria-hidden class="cybr-btn__glitch">ʇɔɐʇuoɔ</span>
          </button>
        </div>
    )
}

export default MainPage;