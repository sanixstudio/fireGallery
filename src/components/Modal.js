import React from "react";

function Modal({ selectedImg, setSelectedImg }) {
    const handleClick = (e) => {
        e.target.classList.contains("backdrop") && setSelectedImg(null);
    };

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="large pic" />
        </div>
    );
}

export default Modal;
