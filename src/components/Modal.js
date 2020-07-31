import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
    const handleClick = (e) => {
        e.target.classList.contains("backdrop") && setSelectedImg(null);
    };

    return (
        <motion.div
            className="backdrop"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img src={selectedImg} alt="large pic" />
        </motion.div>
    );
}

export default Modal;
