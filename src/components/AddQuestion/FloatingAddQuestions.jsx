import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '35px',
  right: '20px',
  backgroundColor: '#878787',
  [':hover']: { backgroundColor: '#343434' }
});

function FloatingAddQuestions({ setPopupIsVisible }) {
  return (
    <StyledFab color="primary" aria-label="add" onClick={() => setPopupIsVisible(true)}>
      <AddIcon />
    </StyledFab>
  );
}

export default FloatingAddQuestions;
