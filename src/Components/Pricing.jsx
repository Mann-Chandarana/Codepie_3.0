import React from "react";

const Pricing = () => {
    return (
        <section className="white-section" id="pricing">

            <h2 className="pricing-text">Win Exciting Prizes</h2>
            <h4>Prizes Worth 12000 !</h4>

            <div className="row">
                <div className="pricing-column col-lg-4 col-md-6 lap">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">2nd Prize</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="pricing-text"><img className="pricing-img watch sf " src="./img/wf.png" alt="" /></h2>
                            <br />
                            <p className="p-desc">Godlike TWS Earphones</p>

                            <button type="button" className="btn btn-lg btn-dark btn-block ">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="pricing-column col-lg-4 col-md-6 lap">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">1st Prize</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="pricing-text"><img className="pricing-img watch sf" src="./img/watch1.jpg" alt="" /></h2>
                            <p className="p-desc"> Noise Icon Buzz BT Calling </p>

                            <button type="button" className="btn btn-lg btn-outline-dark btn-block ">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="pricing-column col-lg-4 col-md-6 mobile godlike">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">1st Prize</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="pricing-text"><img className="pricing-img watch  " src="./img/watch1.jpg" alt="" /></h2>
                            <p className="p-desc"> Noise Icon Buzz BT Calling </p>

                            <button type="button" className="btn btn-lg btn-outline-dark btn-block ">Sign Up</button>
                        </div>
                    </div>
                </div>


                <div className="pricing-column col-lg-4 col-md-6 mobile">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">2nd Prize</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="pricing-text"><img className="pricing-img watch " src="./img/wf.png" alt="" /></h2>
                            <br />
                            <p className="p-desc">Godlike TWS Earphones</p>

                            <button type="button" className="btn btn-lg btn-dark btn-block ">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="pricing-column col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">3rd Prize</h3>
                        </div>
                        <div className="card-body">
                            <h2 className="pricing-text "><img className="pricing-img watch sf img-third" src="./img/third1.png" alt="" />
                            </h2>
                            <p className="p-desc"> Infinity Bluetooth Speaker</p>
                            <button type="button" className="btn btn-lg btn-dark btn-block">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;