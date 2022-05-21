import { Dialog, Grid } from '@mui/material';
import EditQuestionComponent from './EditQuestionComponent.jsx';

function EditQuestionPopup({
  editPopupIsVisible,
  questionId,
  setEditPopupIsVisible,
  setAnchorEl,
  setSectionOpen,
  setCommentsContent
}) {
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
          setCommentsContent={setCommentsContent}
          setSectionOpen={setSectionOpen}
        />
      </Grid>
    </Dialog>
  );
}

export default EditQuestionPopup;
