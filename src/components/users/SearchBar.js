import React, { useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [alert, setAlert] = useState({
    message: null,
    class: null,
  });

  // envoyer le formulaire
  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue === '') {
      setAlert({ message: 'Error', class: 'danger' });
    } else {
      setAlert({ message: 'Congats!', class: 'success' });
    }
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      {alert.message && (
        <div
          class={`alert alert-${alert.class} container mt-5`}
          role="alert"
          data-mdb-color="danger"
        >
          {alert.message}
        </div>
      )}

      <form className="container mt-5" onSubmit={handleSubmit}>
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="search"
          onChange={handleChange}
          value={searchValue}
        />
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
