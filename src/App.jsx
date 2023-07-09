import "./App.scss";
import "./assets/font/stylesheet.css";
import logo from "./assets/ICON/logo.png";
import man from "./assets/IMG/hero-person-img.png";
import ImgOne from "./assets/IMG/1.png";
import ImgTwo from "./assets/IMG/2.png";
import ImgThree from "./assets/IMG/3.png";
import ImgFour from "./assets/IMG/4.png";
import ImgFive from "./assets/IMG/5.png";
import ImgSix from "./assets/IMG/6.png";
import teacher from "./assets/IMG/Teacher.png";
import logofuck from "./assets/IMG/feedback-element.svg";
function App() {
  return (
    <>
      <div className="container-header">
        <header>
          <div className="logo-text">
            <img src={logo} />
          </div>
          <div className="catalogy-choose margin">
            <p>Home</p>
            <p>Services</p>
            <p>Works</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="btn-hire">
            <button>Hire Me</button>
          </div>
        </header>
      </div>
      <div className="container">
        <div className="page-person">
          <div className="box-name-person">
            <h1 className="textOne">Hi, I'm</h1>
            <h1 className="textTwo">Mary Hardy</h1>
            <h1 className="textThree">Digital Marketing Expert</h1>
            <p>
              Shot what able cold new the see hold. Friendly as an betrayed
              formerly he.<br></br> Morning because as to society behaved
              moments
            </p>
            <div className="btn-orange">
              <button className="One">Download CV</button>
              <button className="Two">Contact</button>
            </div>
          </div>
          <div className="box-man-teacher">
            <img src={man} alt="" />
          </div>
        </div>

        <CoponetCatalogi />

        <div className="page-pictere">
          <center>Portfolio</center>
          <center className="name-record">My Amazing Works</center>
          <CoponetMarketing />
        </div>
        <div className="page-teachers">
          <div className="header-text-btn">
            <div>
              <h1>
                Clients Are Satisfied For<br></br> Our Work, View Feedback
              </h1>
            </div>
          </div>
      <div className="div_teach">
          <CoponetTeachers />
          <CoponetTeachers />
          </div>
        </div>
      </div>
      <div className="end-box">
        <h4>
          Developed with love by <a href="">Codeefly</a> © 2023
        </h4>
      </div>
    </>
  );
}

function CoponetTeachers() {
  return (
    <>
      <div className="box-about">
        <img src={teacher} alt="" />
        <div className="color-gray">
          <div className="header-about">
            <div>
              <h1>Awesome Service!</h1>
            </div>
            <div>
              <img src={logofuck} alt="" />
            </div>
          </div>
         <div className="about">
          <p> Loved the template design,<br></br> documentation, customizability and the<br></br> customer support from Marketify team! I<br></br> am a noob in programming with very<br></br> little knowledge about coding.</p>
         </div>
         <div className="name-teacher">
          <h1>Beseie Cooper</h1>
          <p>Web Designer</p>
         </div>
        </div>
      </div>
    </>
  );
}

function CoponetMarketing() {
  return (
    <>
      <div className="choose-marketing">
        <p>All</p>
        <p>Youtube</p>
        <p>Vimeo</p>
        <p>Soundcloud</p>
        <p>Popup</p>
        <p>Details</p>
      </div>
      <div className="main-grid-pictere">
        <img className="grid-img" src={ImgOne} alt="" />
        <img className="grid-img" src={ImgFive} alt="" />
        <img className="grid-img" src={ImgThree} alt="" />
        <img className="grid-img" src={ImgFour} alt="" />
        <img className="grid-img" src={ImgTwo} alt="" />
        <img className="grid-img" src={ImgSix} alt="" />
      </div>
    </>
  );
}

function CoponetCatalogi() {
  return (
    <div className="box-coponet">
      <div className="box-service">
        <h2>Services</h2>
        <h1>
          I Provide Wide<br></br> Range Of Digital<br></br> Services
        </h1>
        <div className="border-btn">
          <div className="btn-rigth">❮</div>
          <div className="btn-left">❯</div>
        </div>
      </div>
      <div className="box-all">
        <div className="box-catalog">
          <div className="border"></div>
          <div className="text-box">
            <h1>Web Design</h1>
            <br></br>
            <p>
              Rror te inal desiga othe<br></br> fal dveoprer age your<br></br>{" "}
              adcased men Mageeef<br></br>speists
            </p>
          </div>
        </div>
        <div className="box-catalog">
          <div className="border"></div>
          <div className="text-box">
            <h1>Web Design</h1>
            <br></br>
            <p>
              Rror te inal desiga othe<br></br> fal dveoprer age your<br></br>{" "}
              adcased men Mageeef<br></br>speists
            </p>
          </div>
        </div>
        <div className="box-catalog">
          <div className="border"></div>
          <div className="text-box">
            <h1>Web Design</h1>
            <br></br>
            <p>
              Rror te inal desiga othe<br></br> fal dveoprer age your<br></br>{" "}
              adcased men Mageeef<br></br>speists
            </p>
          </div>
        </div>
        <div className="box-catalog">
          <div className="border"></div>
          <div className="text-box">
            <h1>Web Design</h1>
            <br></br>
            <p>
              Rror te inal desiga othe<br></br> fal dveoprer age your<br></br>{" "}
              adcased men Mageeef<br></br>speists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
