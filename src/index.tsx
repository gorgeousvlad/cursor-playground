import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NewPage from './components/NewPage';
import './styles/global.css';

const renderApp = () => {
    const container = document.getElementById('root');
    if (!container) {
        throw new Error('Root element not found in the document');
    }

    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/new-page" element={<NewPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};

// Handle both Vite and Webpack cases
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
} 