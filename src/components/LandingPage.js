import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
var LandingPage = function () {
    var navigate = useNavigate();
    return (React.createElement("div", { className: "landing-container" },
        React.createElement("h1", { className: "landing-title" }, "Welcome to Landing Page"),
        React.createElement("p", { className: "landing-text" }, "This is a simple React application"),
        React.createElement("button", { onClick: function () { return navigate('/new-page'); }, className: "nav-button" }, "Go to New Page")));
};
export default LandingPage;
