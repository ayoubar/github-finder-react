import React from 'react';

function Users(props) {
  console.log(" c'est le composant Users", props);
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        {props.users.map((x, index) => (
          <div className="col-md-4">
            <div class="card">
              <img src={x.avatar_url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
