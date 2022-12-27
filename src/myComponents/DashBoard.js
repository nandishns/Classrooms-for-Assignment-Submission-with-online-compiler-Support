import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Class from "./Class";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router";
import Classdetails from "./Classdetails";
import { Link } from "react-router-dom";
import Compiler from "./Compiler";
export default function DashBoard(props) {

    // creating a class
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // joining a class setstates
  const [show_joinClass, setshow_joinClass] = useState(false);
  const handleClose_joinClass = () => setshow_joinClass(false);
  const handleshow_joinClass = () => setshow_joinClass(true);

  
  // profile setstates
  const [showProfile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const[values,setValues] = useState({classname:"",section:"",subject:""})
  const  handleSubmit= async (event)=>
  {
    event.preventDefault();
    try{
      const{data} = await axios.post(
        "http://localhost:5000/class",
        {
          ...values,
        },
        // {withCredentials: true}
      );
      if(data){
        if(data.errors){
          const {classname,section,subject}=data.errors;

        } else{
          console.log("console");
        }
      }
    } catch(ex)
    {
      console.log(ex)
    }
  };


    // Add components
    const [addComponents, setComponents] = useState(["Demo Class"]);
    function addComponent(e) {
      e.preventDefault();
      setComponents([...addComponents, values.classname]);
    }

    //Alerts
    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () =>{ 
      setShow(false);
      setShowAlert(true);
    }

   
      // center modal setstates
  // const [modalShow, setModalShow] = React.useState(false);
  // const handleClose_center = () => setModalShow(false);
  // const handleShow_center = () => setModalShow(true);

  // const generate = () => {
  //   setModalShow(true);
  // };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark  fw-semibold" id="navbar">
    <div className="container-fluid ">
      <a className="navbar-brand fs-1  text-info" href="#">
        Welcome !{props.userName}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ms-5">
            <a className="nav-link active text-light" aria-current="page" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item ms-5 ">
            <Link className="nav-link active text-light" to="/compiler">
              Coding Quiz
            </Link>
          </li>
        </ul>
        <form
          className="d-flex justify-content-space-between"
          role="search"
        >
          <ul className="me-5 pe-4">
            <li className="nav-item dropdown" id="li">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <button className="btn btn-info mt-3"><i class="fa-solid fa-plus-large">+</i> </button> 
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleShow}
                  >
                    Create a class
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleshow_joinClass}
                  >
                    Join a class
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <Button variant="info fw-bold m-0 rounded-circle" onClick={handleShowProfile}>
            Profile
          </Button>
        </form>
      </div>
    </div>
  </nav>
          {/* ----------------------------------BODY-------------------------------------- */}

          <div className=" d-flex p-5 " id="dashboard-body">
        {addComponents.map((classname, i) => (
          <Class classname={classname}   />
        ))}
      </div>


       {/* POP-UP CREATE CLASS */}
       <div id="pop">
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create A Class </Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit} >
          <Form.Group
            className="mb-3 p-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Class Name</Form.Label>
            <Form.Control type="text" name="classname"
             onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})} 
             required autoFocus />
            <Form.Label>Section</Form.Label>
            <Form.Control type="text" name="section" onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})}  />
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" onChange={(e)=>setValues({...values,[e.target.name]: e.target.value})}  />
            <br />
            {/* <Form.Control type="submit" className="btn btn-primary"    onClick={generate} /> */}
          </Form.Group>
          <Form.Control
              type="submit"
              className="btn btn-primary"
              onClick={handleShowAlert}
            />
          <Modal.Footer onClick={handleClose}>
            
           
          </Modal.Footer>
        </Form>
      </Modal> </div>

      {/* ----------------------------------------------- */}

      {/* POP-UP CODE ACCEPTING */}
      <Modal show={show_joinClass} onHide={handleClose_joinClass} id="pop">
        <Modal.Header closeButton>
          <Modal.Title>Join Class</Modal.Title>
        </Modal.Header>
        <Form  >
          <Form.Group
            className="mb-3 p-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Enter the code</Form.Label>
            <Form.Control type="text" required autoFocus />
          </Form.Group>

          <Modal.Footer>
            <Form.Control type="submit" autoFocus />
          </Modal.Footer>
        </Form>
      </Modal>





      <Modal show={showAlert} onHide={handleCloseAlert} animation={false} id="pop">
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Success !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have succesfully created assignment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addComponent}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
   
   
    </>
  )
}

