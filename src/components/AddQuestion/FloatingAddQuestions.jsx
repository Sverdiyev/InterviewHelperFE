import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '35px',
  left: '20px'
});

function FloatingAddQuestions({ setPopupIsVisible }) {
  return (
    <StyledFab color="primary" aria-label="add" onClick={() => setPopupIsVisible(true)}>
      <AddIcon />
    </StyledFab>
  );
}

export default FloatingAddQuestions;
