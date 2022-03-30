import { CardContent } from '@mui/material';
import React from 'react';
import classes from './Question.module.css';

function QuestionHeading({ Complexity, QuestionContent }) {
  return (
    <CardContent className={classes.heading} sx={{ padding: '0' }}>
      <h4>{QuestionContent}</h4>
      <span className={`${classes.difficulty} ${classes[Complexity.toLowerCase()]}`}>
        {Complexity.toLowerCase()}
      </span>
    </CardContent>
  );
}

export default QuestionHeading;
