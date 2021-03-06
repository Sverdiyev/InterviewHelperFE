import styled from '@emotion/styled';
import { CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import QuestionMenu from './QuestinsMenu';
import QuestionFavorite from './QuestionFavorite.jsx';

const StyledComplexity = styled('span')(({ complexity }) => {
  let bgColor;

  switch (complexity) {
    case 'easy':
      bgColor = '#2a623d';
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

function QuestionHeading({
  questionId,
  complexity,
  questionContent,
  isUserFavourite,
  setCommentsContent,
  setSectionOpen
}) {
  return (
    <CardContent
      component={Grid}
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: '0' }}>
      <Typography variant="h6" sx={{ wordBreak: 'break-all', margin: 0, maxWidth: '70%' }}>
        {questionContent}
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <StyledComplexity complexity={complexity.toLowerCase()}>
          {complexity.toLowerCase()}
        </StyledComplexity>

        <QuestionFavorite questionId={questionId} isUserFavourite={isUserFavourite} />
        <QuestionMenu
          questionId={questionId}
          setCommentsContent={setCommentsContent}
          setSectionOpen={setSectionOpen}
        />
      </div>
    </CardContent>
  );
}

export default QuestionHeading;
