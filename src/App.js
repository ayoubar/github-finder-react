import { useState } from 'react';
import NavBar from './components/layouts/NavBar';
import SearchBar from './components/users/SearchBar';
function App() {
  const [title, setTitle] = useState('Github 2021');
  const [links, setLinks] = useState(['Home', 'About', 'contact']);

  return (
    <>
      <NavBar
        titre={title}
        classicon={'fab fa-github me-3'}
        liens_vers_navbar={links}
      />
      <SearchBar />
    </>
  );
}

export default App;
