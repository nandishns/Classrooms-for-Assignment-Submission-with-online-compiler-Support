import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class SignUp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;
    console.log(name, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if(data.error == "User Exists")
        { toast("User Exists");  }
        else if(data.status== "ok"){
          toast("Success");
        }
      });
  }
  render() {
  return (
    <>
  {/* Section: Design Block */}
  <section className="background-radial-gradient overflow-hidden">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(700px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
      }}
    />
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fw-bold ls-tight text-info "
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Welcome To <br />
            <span className='p-2' style={{ color: "hsl(218, 81%, 75%)" }}>
            MNM CLassroom!
            </span>
          </h1>
          {/* <p
            className="mb-4 opacity-70"
            style={{ color: "hsl(218, 81%, 85%)" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
            ipsum nisi dolorem modi. Quos?
          </p> */}
          <lottie-player
  src="https://assets3.lottiefiles.com/packages/lf20_nc1bp7st.json"
  background="transparent"
  speed={1}
  style={{ width: 300, height: 300 }}
  loop=""
  autoPlay=""
/>


        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          />
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          />
          <div className="card bg-glass bg-opacity-75">
            <div className="card-body px-4 py-5 px-md-5">
              <form onSubmit={this.handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                {/* <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div> */}
                {/* First Name */}
                <div className="form-outline mb-4">
                  <input
                    type="name"
                    autoFocus required
                    id="form3Example3"
                    className="form-control"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                     Name
                  </label>
                </div>
               
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                     required
                    id="form3Example3"
                    className="form-control"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4" required
                    className="form-control"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example33"
                    defaultChecked=""
                    required
                  />
                  <label className="form-check-label" htmlFor="form2Example33">
                    I have read the <a href="">Terms & Condition</a> and agree to the same.
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign Up
                </button>
                <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
  <ToastContainer />
</>

    
  )
}
}
