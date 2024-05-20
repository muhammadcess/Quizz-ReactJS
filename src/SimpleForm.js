import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Masukkan sesuatu:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <p>Anda memasukkan: {inputValue}</p>
    </div>
  );
};

export default SimpleForm;
