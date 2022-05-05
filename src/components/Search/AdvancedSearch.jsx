import { Checkbox, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';

function AdvancedSearch({
  tagsValue,
  setTagsValue,
  allTags,
  complexityValue,
  setComplexityValue,
  setHardToGoogle,
  questionRating,
  setQuestionRating
}) {
  const handleSlider = (_, newValue) => {
    setQuestionRating(newValue);
  };

  return (
    <Grid item xs={12} container alignItems="center" justifyContent="space-between">
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
      <Grid item xs={12} sx={{ padding: '1% 2%' }}>
        <Typography>Question Rating</Typography>
        <Slider
          min={-30}
          max={100}
          value={[+questionRating[0], +questionRating[1]]}
          onChange={handleSlider}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Grid>
    </Grid>
  );
}

export default AdvancedSearch;
