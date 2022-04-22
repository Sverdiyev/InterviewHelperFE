import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { styled } from '@mui/system';
import { useContext } from 'react';
import AddQuestionCtx from '../../store/add-question-popup-context.js';

const StyledFab = styled(Fab)({
  position: 'fixed',
  bottom: '35px',
  right: '20px'
});

function FloatingAddQuestions() {
  const { showPopup } = useContext(AddQuestionCtx);

  return (
    <StyledFab color="primary" aria-label="add" onClick={showPopup}>
      <AddIcon />
    </StyledFab>
  );
}

export default FloatingAddQuestions;
