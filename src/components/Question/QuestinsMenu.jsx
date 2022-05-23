import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditQuestionPopup from '../EditQuestion/EditQuestionPopup';
import QuestionDeletionPopup from './QuestionDeletionPopup';

function QuestionMenu({ questionId, setSectionOpen, setCommentsContent }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [editPopupIsVisible, setEditPopupIsVisible] = useState(false);

  const open = Boolean(anchorEl);
  const [deletePopupIsVisible, setDeletePopupIsVisible] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    setAnchorEl(null);
    setDeletePopupIsVisible(true);
  };

  const handleEditClick = () => {
    setAnchorEl(null);
    setEditPopupIsVisible(true);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>
      <EditQuestionPopup
        editPopupIsVisible={editPopupIsVisible}
        questionId={questionId}
        setEditPopupIsVisible={setEditPopupIsVisible}
        setAnchorEl={setAnchorEl}
        setSectionOpen={setSectionOpen}
        setCommentsContent={setCommentsContent}
      />

      <QuestionDeletionPopup
        questionId={questionId}
        popupIsVisible={deletePopupIsVisible}
        setPopupIsVisible={setDeletePopupIsVisible}
        setAnchorEl={setAnchorEl}
        setSectionOpen={setSectionOpen}
        setCommentsContent={setCommentsContent}
      />
    </div>
  );
}

export default QuestionMenu;
