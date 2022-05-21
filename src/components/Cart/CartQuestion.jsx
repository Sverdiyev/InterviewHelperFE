import { Card, Grid, IconButton, Typography } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';

import { styled } from '@mui/system';
import { useContext } from 'react';
import CartContext from '../../store/cart-context.js';

const StyledCard = styled(Card)({
  textAlign: 'left',
  marginBottom: '8px',
  padding: '3px 0 3px 10px',
  boxShadow: 'none'
});

function CartQuestion({ questionId, questionContent }) {
  const cartCtx = useContext(CartContext);

  return (
    <Grid container alignItems="center" component={StyledCard}>
      <Grid item xs={10}>
        <Typography variant="body2">{questionContent}</Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => cartCtx.removeFromCart(questionId)}>
          <ClearIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default CartQuestion;
