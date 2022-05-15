import { Avatar, Typography } from '@mui/material';
import { useQueryClient } from 'react-query';
import QuestionForm from '../Question/QuestionForm.js';
import AddIcon from '@mui/icons-material/AddCircleOutline';

function EditQuestionComponent({ questionId }) {
  const queryClient = useQueryClient();

  const allQuestions = queryClient.getQueryData('questions');
  const chosenQuestion = allQuestions.filter((question) => question.id === questionId)[0];

  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add Question
      </Typography>
      <QuestionForm
        defaultNote={chosenQuestion.note}
        defaultTags={chosenQuestion.tags.map((tag) => tag.tagName).join(', ')}
        defaultComplexity={chosenQuestion.complexity}
        defaultHardToGoogle={chosenQuestion.hardToGoogle}
        defaultHeading={chosenQuestion.questionContent}
        buttonText="Save Changes"
      />
    </>
  );
}

export default EditQuestionComponent;
