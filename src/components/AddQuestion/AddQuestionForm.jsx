import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React, { useRef } from 'react';
import useInputField from '../../services/useInputField.js';
import { questionHeadingValidaton } from '../../services/validators.js';
import InputField from '../StyledUI/InputField.jsx';
import SelectField from '../StyledUI/SelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function AddQuestionForm() {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField(questionHeadingValidaton);
  const [noteValue, setNoteValue] = useInputField();
  const [tagsValue, setTagsValue] = useInputField();
  const [complexityValue, setComplexityValue] = useInputField();

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
    //TODO extract inputs

    //send data to BE
  };
  return (
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
      <Grid container justifyContent="space-between" alignItems="center">
        <SelectField
          value={complexityValue}
          setValue={setComplexityValue}
          label="complexity"
          options={['easy', 'medium', 'hard']}
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => (easyToGoogleValue.current.value = e.target.checked)} />
          }
          label="Easy to google"
        />
      </Grid>
      <SubmitButton disabled={!headingIsValid}>Add Question</SubmitButton>
    </form>
  );
}

export default AddQuestionForm;
