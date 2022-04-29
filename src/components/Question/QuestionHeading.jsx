import styled from '@emotion/styled';
import { CardContent, Grid } from '@mui/material';
import React from 'react';
import QuestionMenu from './QuestinsMenu';

const StyledComplexity = styled('span')(({ complexity }) => {
  let bgColor;

  switch (complexity) {
    case 'easy':
      bgColor = 'green';
      break;
    case 'medium':
      bgColor = '#bb9c35';
      break;
    case 'hard':
      bgColor = '#e26c11';
      break;
    default:
      bgColor = 'grey';
  }
  return {
    color: 'white',
    width: '90px',
    textAlign: 'center',
    display: 'block',
    padding: '3px',
    borderRadius: '25px',
    fontSize: '0.8rem',
    backgroundColor: bgColor
  };
});

function QuestionHeading({ Complexity, QuestionContent }) {
  return (
    <CardContent
      component={Grid}
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: '0', marginBottom: '1rem' }}
    >
      <h4 style={{ margin: 0, maxWidth: '80%', fontSize: '1.3rem' }}>{QuestionContent}</h4>
      <StyledComplexity complexity={Complexity.toLowerCase()}>
        {Complexity.toLowerCase()}
      </StyledComplexity>
      <QuestionMenu />
    </CardContent>
  );
}

export default QuestionHeading;
