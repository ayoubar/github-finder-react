import { Link } from 'react-router-dom';
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
                <h5 class="card-title">{x.login}</h5>

                <Link to={`/user/${x.login}`} class="btn btn-primary">
                  profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
