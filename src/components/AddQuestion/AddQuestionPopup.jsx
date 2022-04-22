import { Dialog, Grid } from '@mui/material';
import React, { useContext } from 'react';
import AddQuestionCtx from '../../store/add-question-popup-context.js';
import AddQuestionComponent from './AddQuestionComponent.jsx';

function AddQuestionPopup() {
  const { popupIsVisible, hidePopup } = useContext(AddQuestionCtx);

  return (
    <Dialog open={popupIsVisible} onClose={hidePopup}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ width: '400px', padding: '30px 30px 50px', boxSizing: 'border-box' }}>
        <AddQuestionComponent />
      </Grid>
    </Dialog>
  );
}

export default AddQuestionPopup;
