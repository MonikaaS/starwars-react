import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
 
const NavBar = () => {
    return (
        <Link to='/'>
            <h1>Star Wars</h1>
        </Link>
    );
}

export default NavBar;