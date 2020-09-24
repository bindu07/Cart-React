import React from 'react';


//Stateless Functional Component , SHorcut sfc
const Navbar = ({ totalCounter }) => {
    return (<nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar {" "} <span className="badge badge-pill badge-secondary">{totalCounter}</span>
        </a>
    </nav>);
}


export default Navbar;