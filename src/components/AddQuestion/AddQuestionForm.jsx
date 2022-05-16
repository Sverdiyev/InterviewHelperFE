import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { postQuestion } from '../../services/api-requests/questions.js';
import useInputField from '../../services/useInputField.js';
import { questionHeadingValidaton } from '../../services/validators.js';
import Alerts from '../StyledUI/Alerts.jsx';
import InputField from '../StyledUI/InputField.jsx';
import SelectField from '../StyledUI/SelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function AddQuestionForm({ setPopupIsVisible }) {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField({
    validationCb: questionHeadingValidaton
  });
  const [noteValue, setNoteValue] = useInputField();
  const [tagsValue, setTagsValue] = useInputField();
  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: 'easy' });
  const [successfullAddition, setSuccessfullAddition] = useState(null);
  const queryClient = useQueryClient();

  const easyToGoogleRef = useRef(true);
  const formIsValid = headingIsValid;

  const addMutation = useMutation((value) => postQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

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
      complexity: complexityValue
    };
    addMutation.mutate(data, {
      onSuccess: () => {
        setSuccessfullAddition(true);
        setTimeout(() => {
          setPopupIsVisible(false);
        }, 2000); // pause for 2 seconds so the user sees prompt for seccessful addition
      },
      onError: () => {
        setSuccessfullAddition(false);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <Alerts
        failLabel="Addition Failed"
        successLabel="Added"
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
