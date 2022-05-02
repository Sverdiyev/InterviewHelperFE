import React from 'react';
import ArrowUp from '@mui/icons-material/ArrowDropUp';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import { yellow, grey } from '@mui/material/colors';
import { Button, Grid } from '@mui/material';

function QuestionActions({ vote }) {
  return (
    <>
      <span>{vote > 0 ? '+' + vote : vote}</span>
      <Grid container direction="column">
        <Button size="small">
          <ArrowUp fontSize="large" sx={{ color: '#549f60' }} />
        </Button>
        <Button size="small">
          <ArrowDown fontSize="large" sx={{ color: '#d78418' }} />
        </Button>
      </Grid>
      <span>
        <Checkbox
          icon={<StarOutlineIcon />}
          checkedIcon={<StarIcon />}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: yellow[600]
            }
          }}
        />
      </span>
    </>
  );
}

export default QuestionActions;
