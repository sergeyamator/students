import React from 'react';

export default ({onSearch}) => {
  let textInput;
  function search() {
    onSearch(textInput.value);
  }

  return (
    <form>
      <input
        ref={input => textInput = input}
        type="text"
        onInput={search}
      />
    </form>
  )
}
