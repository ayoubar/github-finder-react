import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import SearchBar from './components/users/SearchBar';

import Users from './components/users/Users';
import User from './components/users/User';
function About() {
  const [
    content,
    setContent,
  ] = useState(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi soluta quisquam facere placeat reiciendis consectetur perspiciatis odit pariatur, rem doloribus
  `);
  return (
    <div>
      <h1> {content}</h1>
    </div>
  );
}

function Contact() {
  return (
    <form className="mt-5 container">
      <h1>contact Page </h1>
      <label> first name</label>
      <input type="text" />
      <label> last name</label>
      <input type="text" />
    </form>
  );
}

function Test() {
  const [classBtn, setClass] = useState('btn-warning');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setClass('btn-danger');
  }, [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  function setTowarning() {
    setClass('btn-warning');
  }

  return (
    <div className="pa-4">
      <b>{counter}</b>
      <p className="mt-4  bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque eum
        vel, repellat assumenda deserunt? Natus illum magni culpa perferendis.
      </p>
      <button className={`btn ${classBtn}`} onClick={setTowarning}>
        {' '}
        test
      </button>
      <button className="btn btn-success" onClick={increment}>
        {' '}
        click
      </button>
    </div>
  );
}
function App() {
  const [title, setTitle] = useState('Github 2021');
  const [links, setLinks] = useState([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]);

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(null);

  // todo: search for users fucntion
  async function searchUsers(nom_utilisateur) {
    console.log(nom_utilisateur);
    const reponse = await fetch(
      `https://api.github.com/search/users?q=${nom_utilisateur}`
    );
    const data = await reponse.json();
    setUsers(data.items);
  }

  function clearUsers() {
    setUsers([]);
  }

  async function getUser(username) {
    const resposne = await fetch(`https://api.github.com/users/${username}`);
    const data = await resposne.json();
    setUser(data);
  }

  return (
    <Router>
      <NavBar
        titre={title}
        classicon={'fab fa-github me-3'}
        liens_vers_navbar={links}
      />
      <Switch>
        <Route exact path="/">
          <SearchBar
            lengthUser={users.length}
            searchUsers={searchUsers}
            clearUsers={clearUsers}
          />
          <Users users={users} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/user/:name">
          <User user={user} getUser={getUser} />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
