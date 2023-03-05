import React, { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const url = 'https://script.google.com/a/macros/charusat.edu.in/s/AKfycby47YxQRwBrmy7O-MZ9FMC8cDTpXfUt3zciFsm6r-5Hl9v6Ebi5zx03xLHxCSHLKm6_JA/exec';
        fetch(url)
            .then(x => x.json())
            .then(y => document.getElementById("register_count").innerHTML = (y - 1) + "/170");
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand logo-t" href="#">Codepie 3.0</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Prizes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cta">Rules</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar