import { Avatar, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import useInputField from '../../services/helpers.js';
import InputField from '../Login/InputField.jsx';
import AddIcon from '@mui/icons-material/AddCircleOutline';

function AddQuestionComponent() {
  const [headingValue, setHeadingValue, headingIsValid, headingIsTouched] = useInputField(
    () => true
  );
  const [noteValue, setNoteValue, noteIsValid, noteIsTouched] = useInputField(() => true);
  const [tagsValue, setTagsValue, tagsIsValid, tagsIsTouched] = useInputField(() => true);

  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Question
      </Typography>
      <InputField
        label="Heading"
        id="heading"
        inputValue={headingValue}
        onInputChange={setHeadingValue}
        autoFocus
        error={headingIsTouched && !headingIsValid}
      />
      <InputField
        id="note"
        label="Note"
        inputValue={noteValue}
        onInputChange={setNoteValue}
        error={noteIsTouched && !noteIsValid}
      />
      <InputField
        id="tags"
        label="Tags"
        inputValue={tagsValue}
        onInputChange={setTagsValue}
        error={tagsIsTouched && !tagsIsValid}
      />
      <FormControlLabel
        control={<Checkbox onChange={(e) => console.log(e.target.checked)} />}
        label="Easy to google"
      />
    </>
  );
}

export default AddQuestionComponent;
