import AddIcon from '@mui/icons-material/AddCircleOutline';
import { Avatar, Typography } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { postQuestion } from '../../services/api-requests/questions.js';
import QuestionForm from '../Question/QuestionForm.js';

function AddQuestionComponent({ setPopupIsVisible = () => null }) {
  const queryClient = useQueryClient();

  const addMutation = useMutation((value) => postQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questionsFetch')
  });

  const handleSubmissionCb = (data, setSuccess = () => null) => {
    addMutation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        setTimeout(() => {
          setPopupIsVisible(false);
        }, 2000);
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
        handleSubmissionCb={handleSubmissionCb}
        buttonText="Add Question"
        setPopupIsVisible={setPopupIsVisible}
      />
    </>
  );
}

export default AddQuestionComponent;
