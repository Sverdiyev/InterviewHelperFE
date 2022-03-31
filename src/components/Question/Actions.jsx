import React from 'react';
import ArrowUp from '@mui/icons-material/ArrowDropUp';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import { Button, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCardActions = styled(CardActions)({
  padding: 0,
  gap: '5px',
  '.MuiButton-root': { paddingTop: 0, paddingBottom: 0 }
});

function Actions({ Vote }) {
  return (
    <StyledCardActions>
      <span>{Vote > 0 ? '+' + Vote : Vote}</span>
      <Grid container direction="column">
        <Button size="small">
          <ArrowUp fontSize="large" sx={{ color: '#549f60' }} />
        </Button>
        <Button size="small">
          <ArrowDown fontSize="large" sx={{ color: '#d78418' }} />
        </Button>
      </Grid>
    </StyledCardActions>
  );
}

export default Actions;
