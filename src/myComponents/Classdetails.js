import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
export default function Classdetails() {
const [Announcement,setAnnouncement] = useState([""]);
const handleAdd=()=>{
  const abc=[...Announcement]
    setAnnouncement(abc)
}
const [fullscreen, setFullscreen] = useState(true);
  const [showFull, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const [fullscreenGrades, setFullscreenGrades] = useState(true);
  const [showFullGrades, setShowGrades] = useState(false);

  function handleShowGrades(breakpoint) {
    setFullscreenGrades(breakpoint);
    setShowGrades(true);
  }

  return (
    <>
    
    <nav className="navbar navbar-dark bg-dark fixed-top mb-5 text-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      NMN Classroom
    </a>
    <button
      className="navbar-toggler bg-info"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
          
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/dashboard">
            <button className='btn btn-dark' > Dashboard</button> 
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  href="#">
            <button className='btn btn-dark' > Stream</button> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <button className='btn btn-dark' onClick={handleShow}> Assignments</button>  
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <button className='btn btn-dark' onClick={handleShowGrades} >Grades</button> 
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</nav>

<div class="m-5 p-5 text-center  ">
  <div>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Announcements' rows="5" 
  // onChange={handleOnChange}
  ></textarea>
 </div> 
<div ><button className='btn btn-info  m-5'>Post</button></div>
</div>

<Modal show={showFull} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
            <div className="container">
        <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Tile
    </label>
   
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Example textarea
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={4}
      defaultValue={""}
      placeholder="Intructions (optional)"
    />
    <div className="mb-3">
  
  <div className="container mt-5 ">
  <input
    className="form-control"
    type="file"
    id="formFileMultiple"
    multiple=""
  />
<div className="text-center">
  <input type="date" className=" form-control m-3 " /> </div>
  <div className="container text-center mt-5">
    <input className='btn btn-primary' type="submit" 
    // onClick={handleShowAlert} 
    />
  </div>
</div>
</div>

  </div> </div></form>
        </Modal.Body>
        
      </Modal>

          {/* ----------------------------------------------------- */}

          <Modal show={showFullGrades} fullscreen={fullscreenGrades} onHide={() => setShowGrades(false)} id="pop">
        <Modal.Header closeButton>
          <Modal.Title>Grade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th> Section</th>
          <th>Grades</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nandan</td>
          <td>f</td>
          <td>90/100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Manas</td>
          <td> A</td>
          <td>80/100</td>
        </tr>
        <tr>
          <td>3</td>
          <td > Nandish</td>
          <td > C</td>
          <td>100/100</td>
        </tr>
      </tbody>
    </Table>
        </Modal.Body>
       



      </Modal>

    </>
  )
}
