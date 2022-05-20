import ListIcon from '@mui/icons-material/List';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '100px',
  left: '20px',
  backgroundColor: '#878787',
  [':hover']: { backgroundColor: '#343434' }
});

function FloatingQuestionsCart({ setCartIsVisible }) {
  return (
    <div>
      <StyledFab
        color="primary"
        aria-label="cart"
        onClick={() => setCartIsVisible((prevState) => !prevState)}>
        <ListIcon />
      </StyledFab>
    </div>
  );
}

export default FloatingQuestionsCart;
