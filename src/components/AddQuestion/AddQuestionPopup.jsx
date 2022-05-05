import { Dialog, Grid } from '@mui/material';
import AddQuestionComponent from './AddQuestionComponent.jsx';

function AddQuestionPopup({ popupIsVisible, setPopupIsVisible }) {
  return (
    <Dialog open={popupIsVisible} onClose={() => setPopupIsVisible(false)}>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ width: '600px', padding: '30px 30px 50px', boxSizing: 'border-box' }}>
        <AddQuestionComponent setPopupIsVisible={setPopupIsVisible} />
      </Grid>
    </Dialog>
  );
}

export default AddQuestionPopup;
