import React from 'react';
import { useNavigate } from 'react-router-dom';
import GraphExample from './GraphExample';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Landing Page</h1>
            <p className="landing-text">This is a simple React application with an interactive graph visualization</p>
            <GraphExample />
            <button 
                onClick={() => navigate('/new-page')}
                className="nav-button"
            >
                Go to New Page
            </button>
        </div>
    );
};

export default LandingPage; 