import { CardContent, Chip, Grid } from '@mui/material';

function QuestionBody({ note, tags }) {
  return (
    <CardContent
      component={Grid}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 0, flex: 1 }}>
      <span style={{ fontSize: '0.8rem' }}>{note} </span>
      <Grid container sx={{ width: '80%', gap: '5px' }}>
        {tags[0]?.tagName &&
          tags.map((tag) => (
            <Chip
              key={tag.tagName}
              label={tag.tagName[0].toUpperCase() + tag.tagName.slice(1)}
              size="small"
            />
          ))}
      </Grid>
    </CardContent>
  );
}

export default QuestionBody;
