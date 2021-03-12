import React from 'react';

function Users(props) {
  console.log(" c'est le composant Users", props);
  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <div class="card">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div class="card">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div class="card">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
