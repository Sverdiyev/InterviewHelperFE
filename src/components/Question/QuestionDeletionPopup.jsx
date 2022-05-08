import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteQuestion } from '../../services/api-requests/questions.js';
import { useQueryClient, useMutation } from 'react-query';

export default function QuestionDeletionPopup({
  questionId,
  popupIsVisible,
  setPopupIsVisible,
  setAnchorEl
}) {
  const queryClient = new useQueryClient();

  const deleteMutation = useMutation((value) => deleteQuestion(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const handleClose = (reason) => {
    if (reason != 'backdropClick') {
      setPopupIsVisible(false);
      setAnchorEl(null);
    }
  };

  const handleCancel = (reason) => {
    handleClose(reason);
  };

  const handleDelete = (reason) => {
    deleteMutation.mutate(questionId);
    handleClose(reason);
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
          <Button onClick={() => handleCancel('cancel')}>Cancel</Button>
          <Button onClick={() => handleDelete('confirm')}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
