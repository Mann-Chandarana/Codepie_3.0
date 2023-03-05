import React from "react";

const Navbar1 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-5 pt-3">
            <a className="navbar-brand mx-5" href="#">Code<font style={{color:"orange"}}>pie</font> 3.0</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item active">
                        <a className="nav-link" href="#Register">Register</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#pricing">Prizes</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#cta">Rules</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar1;