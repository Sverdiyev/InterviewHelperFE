import ListIcon from '@mui/icons-material/List';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';
import { useContext } from 'react';
import CartContext from '../../store/cart-context.js';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '35px',
  right: '20px'
});

function FloatingQuestionsCart() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <StyledFab color="primary" aria-label="cart" onClick={() => cartCtx.toggleCart()}>
        <ListIcon />
      </StyledFab>
    </div>
  );
}

export default FloatingQuestionsCart;
