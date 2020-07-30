import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div className="progressBar" style={{ width: progress + "%" }}></div>
    );
}
