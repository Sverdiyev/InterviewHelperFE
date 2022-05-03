import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useRef } from 'react';
import useInputField from '../../services/useInputField.js';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';
import SelectField from '../StyledUI/SelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function AdvancedSearch() {
  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: 'Not Relevant' });
  const hardToGoogleRef = useRef(true);
  const [tagsValue, setTagsValue] = useInputField({ defaultValue: [] });

  //get all tags
  const allTags = ['tag1', 'tag2', 'tag3', 'tag4'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      hardToGoogle: hardToGoogleRef.current,
      // tags: tagsValue.split(',').map((tag) => tag.trim()),
      complexity: complexityValue
    };
    console.log('🚀 ~ handleSubmit ~ data', data);

    // setSuccessfullAddition(postQuestion(data));
    //send data to BE
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
      <MultipleSelectField
        values={tagsValue}
        setValue={setTagsValue}
        label="Tags"
        options={allTags}
      />
      <Grid container alignItems="center">
        <SelectField
          value={complexityValue}
          setValue={setComplexityValue}
          label="complexity"
          options={['Not Relevant', 'easy', 'medium', 'hard']}
        />
        <FormControlLabel
          sx={{ margin: '0 auto' }}
          control={
            <Checkbox
              defaultChecked
              onChange={(e) => (hardToGoogleRef.current = e.target.checked)}
            />
          }
          label="Hard to google"
        />
      </Grid>
      <SubmitButton>Search by Paramaters</SubmitButton>
    </form>
  );
}

export default AdvancedSearch;
