import React from 'react';
import classes from './Question.module.css';
import ArrowUp from '@mui/icons-material/ArrowDropUp';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import { Button, CardActions } from '@mui/material';

function Actions({ Vote }) {
  return (
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
  );
}

export default Actions;
