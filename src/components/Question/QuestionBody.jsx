import { CardContent, Chip, Grid } from '@mui/material';

function QuestionBody({ Note, Tags }) {
  return (
    <CardContent
      component={Grid}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 0, flex: 1 }}>
      <span style={{ fontSize: '0.8rem' }}>{Note} </span>
      <Grid container sx={{ width: '80%', gap: '5px' }}>
        {Tags.map((tag) => (
          <Chip key={tag} label={tag[0].toUpperCase() + tag.slice(1)} size="small" />
        ))}
      </Grid>
    </CardContent>
  );
}

export default QuestionBody;
