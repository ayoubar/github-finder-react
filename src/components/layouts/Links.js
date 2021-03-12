import { useState } from 'react';

function Links(props) {
  console.log('Links props', props);
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {props.liens_vers_links.map((x, index) => (
        <li className="nav-item" key={index}>
          <a className="nav-link active" aria-current="page" href="#">
            {x}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Links;
