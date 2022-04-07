import { CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledTag = styled('span')({
  marginRight: '10px',
  color: 'white',
  backgroundColor: 'grey',
  borderRadius: '25px',
  padding: '3px 7px',
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '100px',
  display: 'inline-block'
});

function QuestionBody({ Note, Tags }) {
  return (
    <CardContent
      component={Grid}
      container
      direction="column"
      justifyContent="space-between"
      sx={{ padding: 0, flex: 1 }}>
      <span style={{ fontSize: '0.8rem' }}>{Note} </span>
      <Grid alignItems="center" sx={{ width: '80%' }}>
        {Tags.map((tag) => (
          <StyledTag key={tag}>{tag[0].toUpperCase() + tag.slice(1)}</StyledTag>
        ))}
      </Grid>
    </CardContent>
  );
}

export default QuestionBody;
