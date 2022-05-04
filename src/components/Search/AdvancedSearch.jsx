import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useInputField from '../../services/useInputField.js';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';
import SubmitButton from '../StyledUI/SubmitButton.jsx';

function AdvancedSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const allSearchValues = {};
  searchParams.forEach((value, key) => {
    if (value) allSearchValues[key] = value;
  });

  const [complexityValue, setComplexityValue] = useInputField({ defaultValue: [] });
  const [tagsValue, setTagsValue] = useInputField({ defaultValue: [] });
  const hardToGoogleRef = useRef(true);

  //get all tags
  const allTags = ['tag1', 'tag2', 'tag3', 'tag4'];

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ search: searchParams.get('search'), hardToGoogle: ['asdasd', 'asdasd'] });
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
      <Grid container alignItems="center" spacing={2} justifyContent="space-between">
        <Grid item xs={4}>
          <MultipleSelectField
            values={tagsValue}
            setValue={setTagsValue}
            label="Tags"
            options={allTags}
          />
        </Grid>
        <Grid item xs={4}>
          <MultipleSelectField
            values={complexityValue}
            setValue={setComplexityValue}
            label="Complexity"
            options={['easy', 'medium', 'hard']}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={(e) => (hardToGoogleRef.current = e.target.checked)}
              />
            }
            label="Hard to google"
          />
        </Grid>
      </Grid>
      <SubmitButton>Search by Paramaters</SubmitButton>
    </form>
  );
}

export default AdvancedSearch;
