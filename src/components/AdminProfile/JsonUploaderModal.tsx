
import '../../styles/AdminProfile/JsonUploaderModal.scss';
import React, { useState, ChangeEvent } from "react";

interface Props {
    onClose: () => void;
}

const JsonUploaderModal: React.FC<Props> = ({ onClose }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus("idle");
        setMessage("");
        const file = e.target.files && e.target.files[0];
        if (file) {
            if (file.type !== "application/json" && !file.name.endsWith(".json")) {
                setSelectedFile(null);
                setStatus("error");
                setMessage("Only JSON files are allowed!");
            } else {
                setSelectedFile(file);
                setStatus("idle");
                setMessage("");
            }
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setStatus("error");
            setMessage("Please select a JSON file first.");
            return;
        }

        setStatus("uploading");
        setMessage("Uploading file...");

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result;
                if (typeof text !== "string") throw new Error("File read error");

                setTimeout(() => {
                    setStatus("success");
                    setMessage(`Upload successful!`);
                    setSelectedFile(null);
                    const input = document.getElementById("jsonFileInput") as HTMLInputElement;
                    if (input) input.value = "";
                }, 1500);
            } catch (error) {
                setStatus("error");
                setMessage("Invalid JSON format.");
            }
        };
        reader.readAsText(selectedFile);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-uploader" onClick={(e) => e.stopPropagation()}>
                <h3>📁 Upload JSON File</h3>
                <label htmlFor="jsonFileInput" className="upload-circle">
                    <span className="plus">+</span>
                </label>
                <input
                    type="file"
                    id="jsonFileInput"
                    accept=".json,application/json"
                    onChange={handleFileChange}
                    hidden
                />

                {selectedFile && <p className="file-name">Selected file: {selectedFile.name}</p>}

                <button onClick={handleUpload} disabled={status === "uploading"}>
                    {status === "uploading" ? "Uploading..." : "Upload"}
                </button>

                {message && (
                    <p
                        className={`message ${
                            status === "error" ? "error" : status === "success" ? "success" : ""
                        }`}
                    >
                        {message}
                    </p>
                )}

                <button className="close-btn" onClick={onClose}>❌ Close</button>
            </div>
        </div>
    );
};

export default JsonUploaderModal;

