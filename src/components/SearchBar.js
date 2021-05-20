import React, { useState } from 'react';

// function component - hook style
const SearchBar = ({ onFormSubmit }) => {
  // declare term that's used on line 9
  const [term, setTerm] = useState('');

  // // event handlers need to be defined as variables if outside of class / inside function instead
  // const onInputChange = event => {
  //   // to update state in a funtion component, you can't use this and setState
  //   // we have to use setter we got when we initialised a piece of state with useState hook
  //   setTerm(event.target.value);
  // };

  const onSubmit = event => {
    // prevents it automatically submittting
    event.preventDefault();
    // prop
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            // event handler instead of separate function
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
    // hi
  );
};

export default SearchBar;
