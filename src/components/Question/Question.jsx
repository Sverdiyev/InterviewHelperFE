import React from 'react';
import QuestionActions from './QuestionActions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';

import { Card, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  textAlign: 'left',
  width: '60%',
  padding: '1rem',
  marginBottom: '1rem'
});
const StyledCardActions = styled(CardActions)({
  padding: 0,
  gap: '5px',
  '.MuiButton-root': { paddingTop: 0, paddingBottom: 0 }
});

function Question({ id, complexity, questionContent, note, vote, tags, userVote }) {
  return (
    <StyledCard variant="outlined" component={Grid} container direction="column">
      <QuestionHeading complexity={complexity} questionContent={questionContent} />
      <Grid container justifyContent="space-between" alignContent="space-between">
        <QuestionBody note={note || 'No Description Added'} tags={tags} />
        <StyledCardActions>
          <QuestionActions questionVote={vote} userVote={userVote} questionId={id} />
        </StyledCardActions>
      </Grid>
    </StyledCard>
  );
}

export default Question;
