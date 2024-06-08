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
            const res = await axios.post('https://8a3f-34-138-26-197.ngrok-free.app/pred', formData, {
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

    return (
        <div>
            <div className="wrapper-top">
                <div className="nselect">
                    <ul>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/dashboard">Working</Link></li>
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
                {loading && <Spinner />}  {/* Show spinner while loading */}
                {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
                {response && (
                    <div>
                        <h2>Response</h2>
                        <h2><pre>{JSON.stringify(response.prediction, null, 2)}</pre></h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
