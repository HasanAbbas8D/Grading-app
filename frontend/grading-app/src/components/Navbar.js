import { Paper } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <Paper elevation={8} style={{ padding: '10px', maxWidth: '100%', margin: '25px' }}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to={"/"} >Grade Cal</Link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Signup">Signup</Link>
      </li>
    </ul>
  </div>
</nav>
</Paper>
  );
};

export default Navbar;
