import AddIcon from '@mui/icons-material/AddCircleOutline';
import { Avatar, Typography } from '@mui/material';
import { postQuestion } from '../../services/api-requests/questions.js';
import QuestionForm from '../Question/QuestionForm.js';

function AddQuestionComponent() {
  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Question
      </Typography>
      <QuestionForm handleSubmissionCb={postQuestion} />
    </>
  );
}

export default AddQuestionComponent;
