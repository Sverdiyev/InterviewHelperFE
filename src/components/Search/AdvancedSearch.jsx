import { FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import useInputField from '../../services/useInputField.js';
import InputField from '../StyledUI/InputField.jsx';
import SelectField from '../StyledUI/SelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function AdvancedSearch() {
  const [headingValue, setHeadingValue, headingIsValid] = useInputField();
  const [noteValue, setNoteValue] = useInputField();
  const [tagsValue, setTagsValue] = useInputField();
  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: 'Not Relevant' });
  const [easyToGoogle, setEasyToGoogle] = useState('Not Relevant');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      questionContent: headingValue,
      note: noteValue,
      easyToGoogle: easyToGoogle,
      tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue
    };
    console.log('🚀 ~ handleSubmit ~ data', data);

    // setSuccessfullAddition(postQuestion(data));
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
        rows={2}
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
          value={complexityValue}
          setValue={setComplexityValue}
          label="complexity"
          options={['Not Relevant', 'easy', 'medium', 'hard']}
        />
        <RadioGroup value={easyToGoogle} onChange={(e) => setEasyToGoogle(e.target.value)}>
          <Grid container>
            <FormControlLabel value="Not Relevant" control={<Radio />} label="Not Relevant" />
            <FormControlLabel value={true} control={<Radio />} label="Easy to Google" />
            <FormControlLabel value={false} control={<Radio />} label="Hard to Google" />
          </Grid>
        </RadioGroup>
      </Grid>
      <SubmitButton>Search by Paramaters</SubmitButton>
    </form>
  );
}

export default AdvancedSearch;
