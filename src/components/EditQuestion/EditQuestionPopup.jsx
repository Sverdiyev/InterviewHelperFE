import { Dialog, Grid } from '@mui/material';
import EditQuestionComponent from './EditQuestionComponent.jsx';

function EditQuestionPopup({ editPopupIsVisible, questionId, setEditPopupIsVisible, setAnchorEl }) {
  const handleClose = () => {
    setEditPopupIsVisible(false);
    setAnchorEl(null);
  };
  return (
    <Dialog open={editPopupIsVisible} onClose={handleClose}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ width: '600px', padding: '30px 30px 50px', boxSizing: 'border-box' }}>
        <EditQuestionComponent
          questionId={questionId}
          setEditPopupIsVisible={setEditPopupIsVisible}
        />
      </Grid>
    </Dialog>
  );
}

export default EditQuestionPopup;
