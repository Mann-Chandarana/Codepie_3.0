import React from "react";

const Footer = () => {
    return (
        <footer className="colored-section" id="footer">
            <div className="container-fluid foot">
                <h2>Contact Us</h2>
                <h3 className="contact">Niyam Muliya </h3>

                <h5><a target="_blank" href="https://wa.me/+919879407741"> +91 9879407741 (Whatsapp) </a>
                </h5>
                <a target="_blank" styles={{color:"white"}} href="https://www.instagram.com/codepie253/" className="icon"><i
                    className="footer-icon fab fa-instagram icon fa-2x"></i> </a>
            </div>
        </footer>
    )
}

export default Footer;