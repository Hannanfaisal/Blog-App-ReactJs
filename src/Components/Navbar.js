import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props){
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">DAILY BLOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">Posts</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/create-posts">Create Posts</Link>
        </li>
        

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
        <li className="nav-item">
           <Link className="login-link card px-2" onClick={props.login}> <h4>
            {props.status ? "LOGOUT" : "LOGIN"} </h4></Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    );
}