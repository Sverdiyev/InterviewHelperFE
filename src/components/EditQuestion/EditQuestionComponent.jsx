import { Avatar, Typography } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import QuestionForm from '../Question/QuestionForm.js';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { putQuestion } from '../../services/api-requests/questions.js';

function EditQuestionComponent({ questionId }) {
  const queryClient = useQueryClient();
  const allQuestions = queryClient.getQueriesData('questionsFetch')[0][1];
  const chosenQuestion = allQuestions.filter((question) => question.id === questionId)[0];

  const editMutation = useMutation((value) => putQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const handleSubmissionCb = (data, setSuccess = () => null) => {
    data.id = questionId;
    editMutation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
      },
      onError: () => {
        setSuccess(false);
      }
    });
  };

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
        handleSubmissionCb={handleSubmissionCb}
      />
    </>
  );
}

export default EditQuestionComponent;
