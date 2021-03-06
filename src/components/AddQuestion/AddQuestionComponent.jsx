import AddIcon from '@mui/icons-material/AddCircleOutline';
import { Avatar, Typography } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postQuestion } from '../../services/api-requests/questions.js';
import QuestionForm from '../Question/QuestionForm.js';

function AddQuestionComponent({ setPopupIsVisible = () => null }) {
  const queryClient = useQueryClient();

  const addMutation = useMutation((value) => postQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questionsFetch')
  });

  const navigate = useNavigate();
  const handleSubmissionCb = (data, setSuccess = () => null) => {
    addMutation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        setTimeout(() => {
          const res = setPopupIsVisible(false);
          if (!res) navigate('/');
        }, 1000);
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
        alertsSuccessText="Added"
        alertsFailutreText="Addition failed"
      />
    </>
  );
}

export default AddQuestionComponent;
