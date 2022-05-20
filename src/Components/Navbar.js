import AuthContext from "../context/AuthProvider";
import { useRef,useState,useEffect,useContext } from "react";


const Navbar  = () => {
    const { user } = useContext(AuthContext);
    return (  
        //Navbar Component Using BS5
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">Fatwa</a>
  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link">Login</a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">Sign-up</a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link"> JWT is: {console.log(user)}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
}
 
export default Navbar ;