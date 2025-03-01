import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NewPage from './components/NewPage';
import './styles/global.css';
var renderApp = function () {
    var container = document.getElementById('root');
    if (!container) {
        throw new Error('Root element not found in the document');
    }
    var root = createRoot(container);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(BrowserRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(LandingPage, null) }),
                React.createElement(Route, { path: "/new-page", element: React.createElement(NewPage, null) })))));
};
// Handle both Vite and Webpack cases
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
}
else {
    renderApp();
}
