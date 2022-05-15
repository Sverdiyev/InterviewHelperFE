import { Dialog, Grid } from '@mui/material';

function EditQuestionComponent({ open, questionId, setEditPopupIsVisible, setAnchorEl }) {
  const handleClose = () => {
    setEditPopupIsVisible(false);
    setAnchorEl(null);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ width: '600px', padding: '30px 30px 50px', boxSizing: 'border-box' }}>
        <EditQuestionComponent questionId={questionId} />
      </Grid>
    </Dialog>
  );
}

export default EditQuestionComponent;
