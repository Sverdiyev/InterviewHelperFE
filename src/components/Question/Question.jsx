import React from 'react';
import { Card } from '@mui/material';

import classes from './Question.module.css';
import Actions from './Actions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';

function Question({ Complexity, QuestionContent, Note = 'No Description Added', Vote, Tags }) {
  return (
    <Card className={classes.card} variant="outlined">
      <QuestionHeading Complexity={Complexity} QuestionContent={QuestionContent} />
      <div className={classes.content}>
        <QuestionBody Note={Note} Tags={Tags} />
        <Actions Vote={Vote} />
      </div>
    </Card>
  );
}

export default Question;
