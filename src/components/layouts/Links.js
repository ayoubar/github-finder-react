import { useState } from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
  console.log('Links props', props);
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {props.liens_vers_links.map((x, index) => (
        <li className="nav-item" key={index}>
          <Link className="nav-link active" aria-current="page" to={x.path}>
            {x.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
