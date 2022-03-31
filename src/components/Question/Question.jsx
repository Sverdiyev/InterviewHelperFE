import React from 'react';
import Actions from './Actions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';

import { Card, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  textAlign: 'left',
  width: '60%',
  padding: '1rem',
  marginBottom: '1rem'
});

function Question({ Complexity, QuestionContent, Note, Vote, Tags }) {
  return (
    <StyledCard variant="outlined" component={Grid} container direction="column">
      <QuestionHeading Complexity={Complexity} QuestionContent={QuestionContent} />
      <Grid container justifyContent="space-between" alignContent="space-between">
        <QuestionBody Note={Note || 'No Description Added'} Tags={Tags} />
        <Actions Vote={Vote} />
      </Grid>
    </StyledCard>
  );
}

export default Question;
