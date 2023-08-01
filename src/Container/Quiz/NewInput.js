import React, { useState } from 'react';

function Input({ value, validate, errorMessage }) {
  const [isValid, setIsValid] = useState(true);

  function handleChange(e) {
    // update the input value
    value = e.target.value;
    // check the input validity
    setIsValid(validate(value));
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={isValid ? '' : 'invalid'}
      />
      {isValid ? null : <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default Input;
