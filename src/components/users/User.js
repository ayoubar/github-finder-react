import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
  const username = useParams().name;
  useEffect(() => {
    props.getUser(username);
  }, []);
  return (
    <div>
      <p> Hi my username is {useParams().name} </p>

      <p> {props?.user?.bio}</p>
      <p> {props.user && props.user.bio}</p>
      <h1> {null && 'AOYUB'}</h1>
    </div>
  );
}

export default User;
