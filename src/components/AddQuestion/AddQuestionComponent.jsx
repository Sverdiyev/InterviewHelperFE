import AddIcon from '@mui/icons-material/AddCircleOutline';
import AddQuestionForm from './AddQuestionForm.jsx';
import { Avatar, Typography } from '@mui/material';

function AddQuestionComponent({ setPopupIsVisible = () => null }) {
  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Question
      </Typography>
      <AddQuestionForm setPopupIsVisible={setPopupIsVisible} />
    </>
  );
}

export default AddQuestionComponent;
