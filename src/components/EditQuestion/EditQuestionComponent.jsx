import { Avatar, Typography } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import QuestionForm from '../Question/QuestionForm.js';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { putQuestion } from '../../services/api-requests/questions.js';
import { useRef, useState } from 'react';
import { editQuestionValidator } from '../../services/helpers.js';

function EditQuestionComponent({ questionId, setEditPopupIsVisible = () => null }) {
  const queryClient = useQueryClient();
  const allQuestions = queryClient.getQueriesData('questionsFetch')[0][1];

  const [failureText, setFailureText] = useState('Edition failed');
  const chosenQuestion = allQuestions.filter((question) => question.id === questionId)[0];
  const oldHeadingValue = useRef(chosenQuestion.questionContent);

  const editMutation = useMutation((value) => putQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questionsFetch')
  });

  const handleSubmissionCb = (data, setSuccess = () => null, setCanSubmit) => {
    data.id = questionId;

    if (!editQuestionValidator(oldHeadingValue.current, data.questionContent)) {
      setFailureText('Cannot change more than 5 words in question Heading');
      return setSuccess(false);
    }
    setFailureText('Edition failed');
    editMutation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        setTimeout(() => {
          setEditPopupIsVisible(false);
        }, 2000);
      },
      onError: () => {
        setSuccess(false);
        setCanSubmit(true);
      }
    });
  };

  return (
    <>
      <Avatar sx={{ m: 1, backgroundColor: '#a0a0a0' }}>
        <AddIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit Question
      </Typography>
      <QuestionForm
        defaultNote={chosenQuestion.note}
        defaultTags={chosenQuestion.tags.map((tag) => tag.tagName).join(', ')}
        defaultComplexity={chosenQuestion.complexity}
        defaultHardToGoogle={chosenQuestion.hardToGoogle}
        defaultHeading={chosenQuestion.questionContent}
        buttonText="Save Changes"
        handleSubmissionCb={handleSubmissionCb}
        alertsSuccessText="Edited"
        alertsFailutreText={failureText}
      />
    </>
  );
}

export default EditQuestionComponent;
