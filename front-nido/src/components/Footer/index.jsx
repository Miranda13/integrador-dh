import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    ©2021 - DigitalBooking
                </div>
                <div className="footer__icon">
                    <i className="fab fa-facebook" onClick={() => window.open("https://www.facebook.com/digitalhouseschool", "_blank")}></i>
                    <i className="fab fa-linkedin-in" onClick={() => window.open("https://www.linkedin.com/school/digital-house-argentina", "_blank")}></i>
                    <i className="fab fa-twitter" onClick={() => window.open("https://twitter.com/_digitalhouse", "_blank")}></i>
                    <i className="fab fa-instagram" onClick={() => window.open("https://www.instagram.com/_digitalhouse ", "_blank")}></i>
                </div>
            </footer>
        );
    }
}

export { Footer };