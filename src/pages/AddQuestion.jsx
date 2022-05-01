import { Grid } from '@mui/material';
import React from 'react';
import AddQuestionComponent from '../components/AddQuestion/AddQuestionComponent.jsx';

function AddQuestion() {
  return (
    <Grid container flexDirection="column" alignItems="center" sx={{ width: '600px' }} mt={8}>
      <AddQuestionComponent />
    </Grid>
  );
}

export default AddQuestion;
