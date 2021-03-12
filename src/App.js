import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import SearchBar from './components/users/SearchBar';

function About() {
  return (
    <div>
      <h1> this is About Page</h1>
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

  return (
    <Router>
      <NavBar
        titre={title}
        classicon={'fab fa-github me-3'}
        liens_vers_navbar={links}
      />
      <Switch>
        <Route exact path="/">
          <SearchBar />
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
