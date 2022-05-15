import { Dialog } from '@mui/material';

function EditQuestionComponent({ open }) {
  const handleClose = () => {};
  return (
    <Dialog open={open} onClose={handleClose}>
      EditQuestion
    </Dialog>
  );
}

export default EditQuestionComponent;
