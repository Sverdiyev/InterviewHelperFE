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

  const easyToGoogleRef = useRef(true);
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
      note: noteValue,
      easyToGoogle: easyToGoogleRef.current,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue
    };

    console.log(data);
    //send data to BE
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
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
            <Checkbox
              defaultChecked
              onChange={(e) => (easyToGoogleRef.current = e.target.checked)}
            />
          }
          label="Easy to google"
        />
      </Grid>
      <SubmitButton disabled={!headingIsValid}>Add Question</SubmitButton>
    </form>
  );
}

export default AddQuestionForm;
