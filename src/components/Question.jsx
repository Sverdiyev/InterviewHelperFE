import React from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';

import classes from '../styles/Question.module.css';

import ArrowUp from '@mui/icons-material/ArrowDropUp';
import ArrowDown from '@mui/icons-material/ArrowDropDown';

function Question({ Complexity, QuestionContent, Note, Vote, Tags }) {
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.heading} sx={{ padding: '0' }}>
        <h4>{QuestionContent}</h4>
        <span className={`${classes.difficulty} ${classes[Complexity]}`}>{Complexity}</span>
      </CardContent>
      <div className={classes.content}>
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

        <CardActions sx={{ padding: '0' }}>
          <span className={classes.rating}>{Vote > 0 ? '+' + Vote : Vote}</span>
          <div className={classes.buttons}>
            <Button size="small" sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ArrowUp fontSize="large" sx={{ color: '#549f60' }} />
            </Button>
            <Button size="small" sx={{ paddingTop: 0, paddingBottom: 0 }}>
              <ArrowDown fontSize="large" sx={{ color: '#d78418' }} />
            </Button>
          </div>
        </CardActions>
      </div>
    </Card>
  );
}

export default Question;
