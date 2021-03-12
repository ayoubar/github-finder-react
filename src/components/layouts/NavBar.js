import React from 'react';
import Links from './Links';
function NavBar(props) {
  console.log('Navbar props', props);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fab fa-github me-3"></i> {props.titre}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Links liens_vers_links={props.liens_vers_navbar} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
