import './App.css';
import './App1.css'

function App() {
  return (
    <>
      <section className="colored-section" id="title">
        <div className="container-fluid">

          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand logo-t" href="#">Codepie 2.0</a>

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


          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-title">A Competitive Programming Contest</h1>
              <br />
              <h3>Date: Friday, <span className="spanl">Oct 14</span> 2022 <br />
                Time : <span className="spanl"> 10 AM to 1 PM</span><br />
                Registration deadline: <span className="spanl">Oct 9 2022, 11:59 PM </span>
                <br />
                Venue: CSPIT and Depstar Labs, Charusat
              </h3>

              <button type="button" className="btn btn-outline-light btn-lg download-button"><a target="_blank" href="https://forms.gle/uQwUH7nveNWCz5w16">Register</a></button>
              <button onclick="window.location.href='https://forms.gle/uQwUH7nveNWCz5w16'" type="button"
                className="btn btn-outline-light btn-lg download-button">Register</button>
            </div>

            <div className="col-lg-6">
              <img className="title-image" src="./img/CodePie_SVG.svg" alt="iphone-mockup" />
            </div>
          </div>
          <h3 className="registered">
            Teams Registered :&nbsp; <span><h3 className="register_count" id="register_count">...</h3></span>
          </h3>
          <div className="progress" style={{width: "30%"}}>
            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: "90%"}}
              aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">35%</div>
          </div>
        </div>

      </section>


      <section className="white-section" id="features">
        <div className="container-fluid">
          <h1>INCREASE YOUR CODING SKILLS</h1>
          <h2>To Compete at a global level</h2>
          <br />
            <h3 className="desc-l">
              In collaboration with Codechef, CSPIT and DEPSTAR Charusat are hosting CODE PIE, a competitive programming
              competition. As a result of this competition, students will be able to enhance their problem-solving skills and
              their ability to brainstorm with their teammates. Our goal is to foster a competitive programming culture at our
              university that will enable students to compete globally.
            </h3>

        </div>
      </section>


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



      <section className="colored-section" id="cta">
        <div className="container-fluid">
          <h1>Rules</h1>
          <p className="rules-t">
            1. All the rules of the contest's scoreboard are the same as those of the Codechef Lunchtime Competition.  <br />
            2. Per team, two computers will be allocated. <br />
            3. A team has to solve at least 2 problems to get a certificate.  <br />
            4. During the contest, the Internet will be unavailable for the first hour and then available for use for the
            next two hours.  <br />
            5. Participants have to give contests in their allocated labs only. Phones, smart watches, pendrive and laptops
            are strictly prohibited in labs.  <br />
            6. The decision of the organisers in declaring the results will be final. No queries in this regard will be
            entertained. <br />
            7. Any team found to be indulging in any form of malpractice will be immediately disqualified. <br />
            8. Please register only once per team, In team formation, inter-institute, inter-branch, or inter-semester is
            allowed. <br />
            9. A maximum of 170 (teams) registrations are allowed. After that, no registration entries will be counted. <br />
          </p>
        </div>
      </section>

      <footer className="white-section" id="footer">
        <div className="container-fluid">
          <h2>Contact Us</h2>
          <h3 className="contact">Niyam Muliya </h3>

          <h5><a target="_blank" href="https://wa.me/+919879407741" className="wa"> +91 9879407741 (Whatsapp) </a>
          </h5>
          <a target="_blank" href="https://www.instagram.com/codepie253/" className="icon"><i
            className="footer-icon fab fa-instagram icon fa-2x"></i> </a>


        </div>
      </footer>


    </>
  );
}

export default App;
