import React from 'react'

const Carousel = () => {
    return (
        <section className="colored-section" id="testimonials">
            <br />
            <br />
            <h1>Photo Gallery</h1>
            <div id="testimonial-carousel" className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active container-fluid">
                        <img src="./img/codepie_photos/1.jpg" className="img-gallery" alt="" />
                    </div>

                    <div className="carousel-item container-fluid">
                        <img className="img-gallery" src="./img/codepie_photos/2.jpg" alt="lady-profile" />
                    </div>

                    <div className="carousel-item container-fluid">
                        <img className="img-gallery" src="./img/codepie_photos/3.jpeg" alt="lady-profile" />
                    </div>

                    <div className="carousel-item container-fluid">
                        <img className="img-gallery" src="./img/codepie_photos/PXL_20220325_104431388.jpg" alt="lady-profile" />
                    </div>

                    <div className="carousel-item container-fluid">
                        <img className="img-gallery" src="./img/codepie_photos/PXL_20220325_063346970.jpg" alt="lady-profile" />
                    </div>

                    <div className="carousel-item container-fluid">
                        <img className="img-gallery" src="./img/codepie_photos/team.jpg" alt="lady-profile" />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

        </section>
    )
}

export default Carousel