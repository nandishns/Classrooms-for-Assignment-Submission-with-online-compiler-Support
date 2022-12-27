
import './App.css';
import Login from './myComponents/Login';
import Register from './myComponents/Register';
import Home from './myComponents/Home';
import Classdetails from './myComponents/Classdetails';
import DashBoard from './myComponents/DashBoard'
import {Route,Routes}  from 'react-router-dom';
import Compiler from './myComponents/Compiler';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home/>} ></Route>
    <Route exact path="/login" element={<Login/>} ></Route>
    <Route exact path="/register" element={<Register/>} ></Route>
    <Route exact path="/compiler" element={<Compiler/>} ></Route>
    <Route exact path="/dashboard" element={<DashBoard/>} ></Route>
    <Route exact path="/dashboard/classdetails" element={<Classdetails/>} ></Route>
   </Routes>
  );
}

export default App;
