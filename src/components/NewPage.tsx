import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewPage.css';

const NewPage = () => {
    const navigate = useNavigate();
    return (
        <div className="newpage-container">
            <h1 className="newpage-title">New Page</h1>
            <p className="newpage-text">You've successfully navigated to the new page!</p>
            <button 
                onClick={() => navigate('/')}
                className="back-button"
            >
                Back to Home
            </button>
        </div>
    );
};

export default NewPage; 