import { useState } from 'react';

const useInputField = (validationCb) => {
  const [inputValue, setInputValue] = useState('');

  const [inputIsValid, setInputIsValid] = useState(false);

  const [inputIsTouched, setInputIsTouched] = useState(false);

  const setInputValueHandler = (event) => {
    setInputIsTouched(true);

    if (!event) return setInputIsValid(false);

    const value = event.target.value;
    setInputValue(value);
    if (validationCb(value)) return setInputIsValid(false);
    setInputIsValid(true);
  };
  return [inputValue, setInputValueHandler, inputIsValid, inputIsTouched];
};

export default useInputField;
