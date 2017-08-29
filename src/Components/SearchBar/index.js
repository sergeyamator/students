import React from 'react';
import './styles.css';

export default ({onSearch}) => {
  let textInput;
  function search() {
    onSearch(textInput.value);
  }

  return (
    <form className="search-form">
      <input
        className='search-input'
        ref={input => textInput = input}
        type='text'
        onInput={search}
      />
    </form>
  );
};
