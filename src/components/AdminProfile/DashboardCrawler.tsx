import React, { useState } from 'react';
import '../../styles/AdminProfile/DashboardCrawler.scss';


const DashboardCrawler: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [link, setLink] = useState('');
    const [hasCrawled, setHasCrawled] = useState(false);

    const handleCraw = () => {
        if (link.trim()) {
            setHasCrawled(true);
        }
    };

    return (
        <div className="crawler-overlay">
            <div className="crawler-popup">
                <h3 className="crawler-title">Dashboard Crawler</h3>

                <input
                    type="text"
                    placeholder="Links to manga dex"
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value);
                        setHasCrawled(false);
                    }}
                />

                {link && !hasCrawled && (
                    <button className="craw-btn" onClick={handleCraw}>Craw</button>
                )}

                {hasCrawled && (
                    <div className="result-section">
                        <div className="file-box-craw">RESULT.JSON</div>
                        <button className="confirm-btn">Confirm</button>

                    </div>
                )}

                <button className="crawler-cancel-btn" onClick={onClose}>✖ Cancel</button>
            </div>
        </div>
    );
};

export default DashboardCrawler;
