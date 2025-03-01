import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NewPage.css';
var NewPage = function () {
    var navigate = useNavigate();
    return (React.createElement("div", { className: "newpage-container" },
        React.createElement("h1", { className: "newpage-title" }, "New Page"),
        React.createElement("p", { className: "newpage-text" }, "You've successfully navigated to the new page!"),
        React.createElement("button", { onClick: function () { return navigate('/'); }, className: "back-button" }, "Back to Home")));
};
export default NewPage;
