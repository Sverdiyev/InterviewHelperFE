import { useState } from 'react';

const useInputField = (validationCb) => {
  const [inputValue, setInputValue] = useState('');

  const [inputIsValid, setInputIsValid] = useState(null);

  const setInputValueHandler = (event) => {
    if (!event) return setInputIsValid(false);

    const value = event.target.value;
    setInputValue(value);
    if (!validationCb(value)) return setInputIsValid(false);
    setInputIsValid(true);
  };
  return [inputValue, setInputValueHandler, inputIsValid];
};

export default useInputField;
