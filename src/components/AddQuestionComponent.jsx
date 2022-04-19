import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React from 'react';
import useInputField from '../services/helpers.js';
import InputField from './Login/InputField.jsx';
import { StyledCard } from './Question/Question.jsx';

function AddQuestionComponent() {
  const [headingValue, setHeadingValue, headingIsValid, headingIsTouched] = useInputField(
    () => true
  );
  const [noteValue, setNoteValue, noteIsValid, noteIsTouched] = useInputField(() => true);
  const [tagsValue, setTagsValue, tagsIsValid, tagsIsTouched] = useInputField(() => true);

  return (
    <StyledCard variant="outlined" component={Grid} container direction="column">
      <InputField
        id="heading"
        inputValue={headingValue}
        onInputChange={setHeadingValue}
        autoFocus
        error={headingIsTouched && !headingIsValid}
      />
      <InputField
        id="note"
        inputValue={noteValue}
        onInputChange={setNoteValue}
        error={noteIsTouched && !noteIsValid}
      />
      <InputField
        id="tags"
        inputValue={tagsValue}
        onInputChange={setTagsValue}
        error={tagsIsTouched && !tagsIsValid}
      />
      <FormControlLabel
        control={<Checkbox onChange={(e) => console.log(e.target.checked)} />}
        label="Easy to google"
      />
    </StyledCard>
  );
}

export default AddQuestionComponent;
