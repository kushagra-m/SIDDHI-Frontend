import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import Spinner from './Spinner';  // Import the spinner component

const HomePage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        setLoading(true);
        setError(null);

        try {
            const res = await axios.post('https://7a86-35-204-126-34.ngrok-free.app/pred', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResponse(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
        
    };

    const customStringify = (obj) => {
        const jsonString = JSON.stringify(obj, null, 2);
        return jsonString.replace(/['"]+/g, '');
    };

    return (
        <div>
            <div className="wrapper-top">
                <div className="nselect">
                    <ul>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/dashboard">Working</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            </div>

            <div className="wrapper">
                <h1>Upload File</h1>
                <input className="uploadf" type="file" onChange={handleFileChange} />
                <button className="upload" onClick={handleUpload} disabled={loading}>
                    {loading ? "Uploading..." : "Upload"}
                </button>
                {loading && <div className="spinner-container">
                        <Spinner />
                    </div>}  {/* Show spinner while loading */}
                {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
                {response && (
                    <div>
                        <h2>Response</h2>
                        <h3>{customStringify(response.prediction)}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
