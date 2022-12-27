import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  // Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

  

  return (
    <>
      <>
  <header className="header" id="something">
    <nav className="navbar navbar-expand-lg navbar-light" id="diff">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse "
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          {/* Left links */}
          <ul className="navbar-nav mb-2 mb-lg-0 p-2 fw-semibold">
            <li className="nav-item ms-5 me-5">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item me-5 ms-3 pe-2">
              <a className="nav-link text-light" href="#">
                FEATURES
              </a>
            </li>
           
            <li className="nav-item me-5 ms-2 pe-2">
              <a className="nav-link text-light" href="#">
                CONTACT US
              </a>
            </li>
            {/* Navbar dropdown */}
            <li className="nav-item ms-5">
              <button type="button" className="btn btn-light  ms-2">
               <Link to="/login" className="link">Login  </Link> 
              </button>
            </li>
            <li className="nav-item ms-5">
              <button type="button" className="btn btn-light  ms-2">
              <Link to="/register" className="link" >Register  </Link>
              </button>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
      </div>
    </nav>
    <div className="d-flex justify-content-between " id="header">
      <div className="container mt-5 p-5 text-light">
        <h2 className="h2 mt-5 fw-bold fs-5">
          NMN Classroom <br />
        </h2>
        <ul className="mt-4 p-3">
          <li className="m-2">
          Web application for 
Assignment submission along with some additional feature using MERN stack
          </li>
          <li className="m-2">
          We are providing a website to upload assignments and submission along with coding platform.
          </li>
        </ul>
        <button
          className="btn text-light fw-bold p-2 mt-4 fw-3 "
          style={{
            width: "40%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            backgroundColor: "#026bff"
          }}
          data-aos="zoom-in-up"
        >
          CONNECT WITH US
        </button>
        
      </div>
      <div className="container p-5" id="hide">
        {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_dews3j6m.json"  background="transparent"  speed="1"  style="width: 500px; height: 500px;"  loop  autoplay></lottie-player> */}
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_ilp95ggh.json"
          background="transparent"
          speed={1}
          style={{ width: 500, height: 500 }}
          loop=""
          autoPlay=""
        />
      </div>
    </div>
  </header>{" "}
  <br /> <br /> <br />
  {/* SECTION - 1  */}
  <section className="section-company">
    <h4 className="h4 text-primary mt-5 ps-3 " data-aos="fade-up">
      WHY COMPANY
    </h4>
    <h2 className="h2 mt-5 ps-3 " data-aos="fade-up">
      MAKING BUSINESSES RUN BETTER, ONE COMPANY AT A TIME
    </h2>
    <div className="d-flex" id="company">
      <div className="container mt-5 pt-5" id="content" data-aos="fade-up">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        et reprehenderit iure, quasi suscipit saepe ea cum quam voluptates quo,
        repellendus iste velit quas modi. Nihil itaque nemo consequuntur minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        deleniti rerum asperiores nisi quam laboriosam veniam minus rem odio.
        Unde blanditiis sit laboriosam fuga consectetur, culpa vitae quas error
        reiciendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Saepe necessitatibus enim quae dolore pariatur libero, dolorum totam
        ducimus minus animi earum atque, corporis, omnis quia quos ipsam alias
        eos rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
      <div className="container ms-5" data-aos="zoom-in-up">
      <lottie-player
  src="https://assets7.lottiefiles.com/packages/lf20_bjyiojos.json"
  background="transparent"
  speed={1}
  style={{ width: 500, height: 500 }}
  loop=""
  autoPlay=""
/>

      </div>
    </div>
    <div className="container text-center mt-5" data-aos="fade-up">
      <button
        className="btn btn-primary fw-bold text-light p-2 fs-4 btn-lg "
        id="btn"
      >
        Learn More
      </button>
    </div>
  </section>{" "}
  <br /> <br />
  <br />
  <section id="service">
    <h3
      style={{ color: "BLUE", padding: "30px 0px 0px 20px", marginTop: 40 }}
      data-aos="fade-up"
    >
      WHAT'S IN IT FOR YOU
    </h3>
    <h1
      style={{ padding: "0px 0px 0px 20px", marginTop: 30 }}
      data-aos="fade-up"
    >
      THINGS THAT YOU WILL LOVE ABOUT US
    </h1>
    <div className="container-fluid " id="service-container">
      <div className="row" id="banner-row" data-aos="zoom-in-up">
        <div className="col-md-4" id="service-col1">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_GyfN7Ah5SO.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
          <h3 align="center">No risk Engagement</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea animi
            est facere eaque excepturi quod?
          </p>
        </div>
        <div className="col-md-4" id="service-col2">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_mc1o2kne.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
          <h3 align="center">GROWTH</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
            delectus impedit pariatur, amet dicta.
          </p>
        </div>
        <div className="col-md-4" id="service-col3">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_ystsffqy.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
          <h3 align="center">FUNDING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, id
            iste nisi nemo laboriosam asperiores.
          </p>
        </div>
      </div>
    </div>
  </section>
  <br /> <br /> <br />
  {/* SECTION-2 */}
  <section className="contact-us" data-aos="zoom-in-up">
    <div className="d-flex justify-content-between">
      <div className="container mt-5 pt-5 text-light">
        <h4 className="" data-aos="fade-up">
          GROW YOUR BUSINESS WITH US
        </h4>
        <h2 className="mt-4" data-aos="fade-up">
          LET'S DISCUSS YOUR NEXT PROJECT
        </h2>
      </div>
      <div className="container m-5 p-5 text-light" id="hide">
        <span data-aos="fade-up">Hello@anonymous.com</span> <br />
        <span data-aos="fade-up">+91 2910320409</span>
      </div>
    </div>
    <div className="d-flex mt-5 pt-4" id="contact-page">
      <div className="container text-light">
        <form
          action="https://formspree.io/f/moqbloye"
          className="p-4"
          method="POST"
          data-aos="flip-up"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              FULL NAME
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              EMAIL ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ADDITIONAL DETAILS
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 mt-5 text-center">
            <input type="submit" className="btn btn-light btn-lg" />
          </div>
        </form>
      </div>
      <div className="container ps-5 ms-5 " data-aos="fade-up">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
          background="transparent"
          id="hide"
          speed={1}
          style={{ width: 350, height: 350 }}
          loop=""
          autoPlay=""
        />
      </div>
    </div>
  </section>
  {/* FOOTER */}
  <footer className="bg-dark text-center text-white">
    <div className="container p-4 pb-0">
      <section className="mb-4">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/the__nandish"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/nandish-n-s/"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://github.com/Nandish2021"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
    </div>
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Made with ❣️ by Nandish
      <p />
    </div>
  </footer>
</>

      {/* <div> this is Home</div> */}
      {/* <ul>
        <li>
            <Link to='/login'>  Login</Link>
        </li>
        <li>
            <Link to='/register'> Register</Link>
        </li>
    </ul> */}

    </>
  );
}
