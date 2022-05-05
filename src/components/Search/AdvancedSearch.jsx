import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';

function AdvancedSearch({
  tagsValue,
  setTagsValue,
  allTags,
  complexityValue,
  setComplexityValue,
  setHardToGoogle
}) {
  return (
    <Grid item xs={12} container alignItems="center" spacing={2} justifyContent="space-between">
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
          control={<Checkbox onChange={(e) => setHardToGoogle(e.target.checked)} />}
          label="Hard to google"
        />
      </Grid>
    </Grid>
  );
}

export default AdvancedSearch;
