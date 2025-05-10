import React, { useState } from "react";
import useUploadBookImage from "../hooks/useUploadBookImage";

const UploadImagePage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const { upload, loading, error, success } = useUploadBookImage();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreview(url);
        } else {
            setPreview(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;
        await upload("book123", file);
    };

    return (
        <div>
            <h2>Upload Book Cover</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
                <div style={{ marginTop: "10px" }}>
                    <img src={preview} alt="Preview" style={{ maxWidth: "200px" }} />
                </div>
            )}
            <button onClick={handleUpload} disabled={!file || loading}>
                {loading ? "Đang upload..." : "Upload"}
            </button>

            {success && <p style={{ color: "green" }}>Upload thành công!</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default UploadImagePage;
