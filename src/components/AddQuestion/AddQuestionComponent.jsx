import { Avatar, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useRef } from 'react';
import InputField from '../Login/InputField.jsx';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import SubmitButton from '../StyledUI/SubmitButton.jsx';
import { questionHeadingValidaton } from '../../services/validators.js';
import useInputField from '../../services/useInputField.js';

function AddQuestionComponent() {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField(questionHeadingValidaton);
  const [noteValue, setNoteValue] = useInputField();
  const [tagsValue, setTagsValue] = useInputField();

  const easyToGoogleValue = useRef(true);
  const formIsValid = headingIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      setHeadingValue();
      setNoteValue();
      setTagsValue();
      return console.log('invalid form');
    }

    const data = {
      questionContent: headingValue,
      Note: noteValue,
      easyToGoogle: easyToGoogleValue,
      tags: tagsValue.split(',').map((tag) => tag.trim())
      //, complexity:...
    };

    console.log(data);

    //send data to BE
  };

  //TODO Add complexity selection
  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Question
      </Typography>
      <form onSubmit={handleSubmit}>
        <InputField
          id="heading"
          label="Heading"
          inputValue={headingValue}
          onInputChange={setHeadingValue}
          autoFocus
          error={headingIsValid === false}
        />
        <InputField id="note" label="Note" inputValue={noteValue} onInputChange={setNoteValue} />
        <InputField
          id="tags"
          label="Tags - comma-separated"
          inputValue={tagsValue}
          onInputChange={setTagsValue}
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => (easyToGoogleValue.current.value = e.target.checked)} />
          }
          label="Easy to google"
        />
        <SubmitButton disabled={!headingIsValid}>Add Question</SubmitButton>
      </form>
    </>
  );
}

export default AddQuestionComponent;
