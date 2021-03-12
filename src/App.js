import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import SearchBar from './components/users/SearchBar';

import Users from './components/users/Users';

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

function App() {
  const [title, setTitle] = useState('Github 2021');
  const [links, setLinks] = useState([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]);

  const [users, setUsers] = useState([]);

  // todo: search for users fucntion
  async function searchUsers(nom_utilisateur) {
    console.log(nom_utilisateur);
    const reponse = await fetch(
      `https://api.github.com/search/users?q=${nom_utilisateur}`
    );
    const data = await reponse.json();
    setUsers(data.items);
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
          <SearchBar searchUsers={searchUsers} />
          <Users users={users} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
