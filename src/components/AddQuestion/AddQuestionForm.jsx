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
      return;
    }

    const data = {
      questionContent: headingValue,
      note: noteValue,
      easyToGoogle: easyToGoogleRef.current,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue || 'easy'
    };

    console.log(data);
    //send data to BE
  };
  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <InputField
        id="heading"
        label="Heading"
        inputValue={headingValue}
        onInputChange={setHeadingValue}
        autoFocus
        error={headingIsValid === false}
        multiline
        rows={4}
      />
      <InputField id="note" label="Note" inputValue={noteValue} onInputChange={setNoteValue} />
      <InputField
        id="tags"
        label="Tags - comma-separated"
        inputValue={tagsValue}
        onInputChange={setTagsValue}
      />
      <Grid container alignItems="center">
        <SelectField
          value={complexityValue || 'easy'}
          setValue={setComplexityValue}
          label="complexity"
          options={['easy', 'medium', 'hard']}
        />
        <FormControlLabel
          sx={{ margin: '0 auto' }}
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
