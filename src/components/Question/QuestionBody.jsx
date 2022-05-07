import { CardContent, Chip, Grid } from '@mui/material';

function QuestionBody({ creationDate, note, tags }) {
  return (
    <CardContent
      component={Grid}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 0, flex: 1 }}>
      <span style={{ fontSize: '0.8rem' }}>{note} </span>
      <Grid container sx={{ width: '80%', gap: '5px' }}>
        {tags[0].tagName &&
          tags.map((tag) => (
            <Chip
              key={tag.tagName}
              label={tag.tagName[0].toUpperCase() + tag.tagName.slice(1)}
              size="small"
            />
          ))}
      </Grid>
      <span style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>
        {calculateElapedPostTime(new Date(), new Date(creationDate))}
      </span>
    </CardContent>
  );
}

export default QuestionBody;

function calculateElapedPostTime(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  const hour = Math.abs(Math.round(diff));
  if (hour == 0) {
    return 'posted less than 1 hour ago.';
  } else if (hour <= 24) {
    // less than one day ago, show hours
    return `posted ${hour} hours ago.`;
  } else if (hour < 720) {
    // less than 1 month ago, show days
    return `posted ${Math.round(hour % 24)} days ago.`;
  } else if (hour < 262800) {
    // less than 1 year ago, show months
    return `posted ${Math.round(hour % 720)} months ago.`;
  } else {
    return `posted ${Math.round(hour % 262800)} years ago.`;
  }
}
