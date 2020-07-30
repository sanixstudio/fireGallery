import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    };

    return (
        <form className="uploadForm">
            <label>
                <input type="file" onChange={handleChange} />
                <span className="uploadBtn">+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="fileName">{file.name}</div>}
                {file && <ProgressBar />}
            </div>
        </form>
    );
}
