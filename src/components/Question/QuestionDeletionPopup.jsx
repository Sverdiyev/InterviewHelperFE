import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { deleteQuestion } from '../../services/api-requests/questions.js';
import { useQueryClient, useMutation } from 'react-query';

function QuestionDeletionPopup({ questionId, popupIsVisible, setPopupIsVisible, setAnchorEl }) {
  const queryClient = new useQueryClient();

  const deleteMutation = useMutation((value) => deleteQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const handleClose = () => {
    setPopupIsVisible(false);
    setAnchorEl(null);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleDelete = () => {
    deleteMutation.mutate(questionId);
    handleClose();
  };
  return (
    <>
      <Dialog open={popupIsVisible} onClose={() => handleClose('backdropClick')}>
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete this question?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            WARNING : You will not be able to recover the question, all comments/votes will be lost!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCancel()}>Cancel</Button>
          <Button onClick={() => handleDelete()}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default QuestionDeletionPopup;
