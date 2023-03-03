import React from 'react'
import Navbar1 from './Navbar1'
import { Leftside } from './Sub_components/Leftside'

const Top_side = () => {
    return (
        <section className="colored-section" id="title">
            <Navbar1 />
            <div className="container-fluid">
                <Leftside />
            </div>
        </section>
    )
}

export default Top_side