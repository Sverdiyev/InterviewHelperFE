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
  alertsSuccessText,
  alertsFailutreText
}) {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField({
    defaultValue: defaultHeading,
    validationCb: questionHeadingValidaton
  });
  const [noteValue, setNoteValue] = useInputField({ defaultValue: defaultNote });
  const [tagsValue, setTagsValue] = useInputField({ defaultValue: defaultTags });
  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: defaultComplexity });
  const [successfullAddition, setSuccessfullAddition] = useState(null);
  const [canSubmit, setCanSubmit] = useState(true);

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
    setCanSubmit(false);

    const data = {
      questionContent: headingValue,
      note: noteValue,
      hardToGoogle: hardToGoogleRef.current,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue
    };
    handleSubmissionCb(data, setSuccessfullAddition, setCanSubmit);
  };
  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <Alerts
        failLabel={alertsFailutreText}
        successLabel={alertsSuccessText}
        setSuccess={setSuccessfullAddition}
        success={successfullAddition}
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
          control={<Checkbox onChange={(e) => (hardToGoogleRef.current = e.target.checked)} />}
          label="Hard to google"
        />
      </Grid>
      <SubmitButton disabled={!headingIsValid || !canSubmit}>{buttonText}</SubmitButton>
    </form>
  );
}

export default QuestionForm;
