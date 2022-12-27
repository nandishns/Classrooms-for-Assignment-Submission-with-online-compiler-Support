import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Classdetails from './Classdetails'
// import {useHistory} from  'react-router-dom'

export default function Class(props) {

    const[show_class,setshow_class]= useState(false)

// const history = useHistory();
// const openClass = () => history.push(`/dashboard/${Class._id}`);

  return (
  <>
   <div className="container p-3 d-flex"> 

<div show={show_class}  className="card" style={{ width: "18rem"  }} id="card" >
  <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> {props.classname} </h5>
    <p className="card-text">
      <div className="container p-5"> {props.section}</div>
    </p>
    <div className="d-flex flex-column justify-content-between">
    <Link
     to="/dashboard/classdetails" 
    // onClick={openClass}
     className="btn btn-primary mb-3" >
     Go to Class.
    </Link>
    {/* <a href="#" className="btn btn-primary mb-3" onClick={() => handleShow('xxl-down')}>
      View Assignment
    </a>
    <a href="#" className="btn btn-primary " onClick={() => handleShowGrades('xxl-down')}>
      View Grades
    </a> */}
    </div>
  </div>
</div>
</div>

  </>
  )
}
