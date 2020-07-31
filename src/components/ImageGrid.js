import React from "react";
import useFirestore from "../hooks/useFirestore";

function ImageGrid() {
    const { docs } = useFirestore("images");

    console.log(docs);

    return (
        <div className="imageGrid">
            {docs &&
                docs.map((doc) => (
                    <div className="image-wrapper" key={doc.id}>
                        <img src={doc.url} alt="some images" />
                    </div>
                ))}
        </div>
    );
}

export default ImageGrid;
