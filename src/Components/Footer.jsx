import React from "react";

const Footer = () => {
    return (
        <footer className="footer-section" id="footer">
            <div className="container-fluid foot">
                <h2>Contact Us</h2>
                <h3 className="contact">Vatsal Ghoghari </h3>

                <h5><a target="_blank" href="https://wa.me/+917203088769"> +91 7203088769 (Whatsapp) </a>
                </h5>
                <h3 className="contact">Shyamal Joshi</h3>

                <h5><a target="_blank" href="https://wa.me/+918780502810"> +91 8780502810 (Whatsapp) </a>
                </h5>
                <a target="_blank" styles={{color:"white"}} href="https://www.instagram.com/codepie253/" className="icon"><i
                    className="footer-icon fab fa-instagram icon fa-2x"></i> </a>
            </div>
        </footer>
    )
}

export default Footer;