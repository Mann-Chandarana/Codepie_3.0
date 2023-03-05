import React from 'react'

export const Leftside = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="big-title">A Competitive Programming Contest</h1>
                    <br />
                    <h3>Date: Friday, <span className="spanl">March 24</span> 2023 <br />
                        Time : <span className="spanl"> 10 AM to 1 PM</span><br />
                        Registration deadline: <span className="spanl">March 20 2023, 11:59 PM </span>
                        <br />
                        Venue: CSPIT and Depstar Labs, Charusat
                    </h3>

                    <button type="button" className="btn btn-outline-light btn-lg download-button"><a target="_blank" href="https://forms.gle/uQwUH7nveNWCz5w16">Register</a></button>
                </div>

                <div className="col-lg-6">
                    <img className="title-image" src="./img/codepie3.0/Photo.jpg" alt="iphone-mockup" />
                </div>
            </div>
            <h3 className="registered">
                Teams Registered :&nbsp; <span><h3 className="register_count" id="register_count">...</h3></span>
            </h3>
        </>
    )
}
