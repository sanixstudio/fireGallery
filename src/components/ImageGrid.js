import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore("images");

    console.log(docs);

    return (
        <div className="imageGrid">
            {docs &&
                docs.map((doc) => (
                    <motion.div
                        className="image-wrapper"
                        key={doc.id}
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => {
                            setSelectedImg(doc.url);
                        }}
                    >
                        <img src={doc.url} alt="some images" />
                    </motion.div>
                ))}
        </div>
    );
}

export default ImageGrid;
