import React, { useState } from 'react';
import './Form.css';

function validateEmail(value) {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return true;
  }
  
  return false;
}

function Input({ label = null, name, text = 'text', value = '', onChange, error = false }) {
  let inputClass = 'form__input';
  if(error) inputClass += ' form__input_error';

  return(
    <>
      {label && <label htmlFor={name} className='form__label'>{label}</label>}
      <input
        id={name}
        name={name} 
        type={text} 
        value={value} 
        onChange={onChange}
        className={inputClass}
      /> 
    </>
  );
}

function Form() {
  const [ value, setValue ] = useState('');
  const [ error, setError ] = useState(false);

  const handleChange = (e) => {
    let val = e.target.value;
    let err = validateEmail(val);

    setError(err);
    setValue(val)
  };

  return (
    <form className='form'>
      <Input 
        name='email'
        type='email'
        error={error}
        value={value}
        label='Email'
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;