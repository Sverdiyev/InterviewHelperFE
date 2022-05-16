import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import useInputField from '../../services/useInputField.js';
import { questionHeadingValidaton } from '../../services/validators.js';
import Alerts from '../StyledUI/Alerts.jsx';
import InputField from '../StyledUI/InputField.jsx';
import SelectField from '../StyledUI/SelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function QuestionForm({
  defaultNote = '',
  defaultTags = '',
  defaultComplexity = 'easy',
  defaultHardToGoogle = false,
  defaultHeading = '',
  buttonText,
  handleSubmissionCb,
  questionId = null
}) {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField({
    defaultValue: defaultHeading,
    validationCb: questionHeadingValidaton
  });
  const [noteValue, setNoteValue] = useInputField({ defaultValue: defaultNote });
  const [tagsValue, setTagsValue] = useInputField({ defaultValue: defaultTags });
  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: defaultComplexity });
  const [successfullAddition, setSuccessfullAddition] = useState(null);

  const hardToGoogleRef = useRef(defaultHardToGoogle);
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
      hardToGoogle: hardToGoogleRef.current,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue
    };
    if (questionId !== null) data.id = questionId;
    const result = handleSubmissionCb(data);
    setSuccessfullAddition(result);
    //send data to BE
  };
  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <Alerts
        failLabel="Addition Failed"
        successLabel="Added"
        success={successfullAddition}
        setSuccess={setSuccessfullAddition}
      />
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
        <Grid item xs={6}>
          <SelectField
            value={complexityValue}
            setValue={setComplexityValue}
            label="complexity"
            options={['easy', 'medium', 'hard']}
          />
        </Grid>
        <FormControlLabel
          sx={{ margin: '0 auto' }}
          control={
            <Checkbox
              defaultChecked
              onChange={(e) => (hardToGoogleRef.current = e.target.checked)}
            />
          }
          label="Easy to google"
        />
      </Grid>
      <SubmitButton disabled={!headingIsValid}>{buttonText}</SubmitButton>
    </form>
  );
}

export default QuestionForm;
