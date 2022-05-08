import { Checkbox, FormControlLabel, Grid, Slider, Typography } from '@mui/material';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';

function AdvancedSearch({
  tagsValue,
  setTagsValue,
  allTags,
  complexityValue,
  setComplexityValue,
  hardToGoogleValue,
  setHardToGoogle,
  questionRating,
  setQuestionRating,
  favoriteValue,
  setFavorite
}) {
  const handleSlider = (_, newValue) => {
    setQuestionRating(newValue);
  };

  return (
    <>
      <Grid item xs={8} container alignItems="center" justifyContent="space-around">
        <Grid item xs={5}>
          <MultipleSelectField
            values={tagsValue}
            setValue={setTagsValue}
            label="Tags"
            options={allTags}
          />
        </Grid>
        <Grid item xs={5}>
          <MultipleSelectField
            values={complexityValue}
            setValue={setComplexityValue}
            label="Complexity"
            options={['easy', 'medium', 'hard']}
          />
        </Grid>
        <Grid item xs={11} sx={{ padding: '1% 2%' }}>
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
      <Grid item xs={4} container flexDirection="column" sx={{ paddingLeft: '3%' }}>
        <FormControlLabel
          sx={{ marginRight: 'auto' }}
          control={
            <Checkbox
              onChange={(e) => setHardToGoogle(e.target.checked)}
              defaultChecked={hardToGoogleValue}
            />
          }
          label="Hard to google"
        />
        <FormControlLabel
          sx={{ marginRight: 'auto' }}
          control={
            <Checkbox
              onChange={(e) => setFavorite(e.target.checked)}
              defaultChecked={favoriteValue}
            />
          }
          label="Favorite"
        />
      </Grid>
    </>
  );
}

export default AdvancedSearch;
