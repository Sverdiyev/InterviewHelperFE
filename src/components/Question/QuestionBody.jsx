import { CardContent } from '@mui/material';
import React from 'react';
import classes from './Question.module.css';

function QuestionBody({ Note, Tags }) {
  return (
    <CardContent className={classes.contentText} sx={{ padding: 0 }}>
      <p className={classes.description}>{Note} </p>
      <div className={classes.tags}>
        {Tags.map((tag) => (
          <span key={tag} className={classes.tag}>
            {tag[0].toUpperCase() + tag.slice(1)}
          </span>
        ))}
      </div>
    </CardContent>
  );
}

export default QuestionBody;
