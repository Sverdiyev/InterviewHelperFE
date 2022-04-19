import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '35px',
  right: '20px'
});

function FloatingAddQuestions() {
  return (
    <StyledFab color="primary" aria-label="add">
      <AddIcon />
    </StyledFab>
  );
}

export default FloatingAddQuestions;
