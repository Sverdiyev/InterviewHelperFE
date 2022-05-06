import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuestionDeletionPopup from './QuestionDeletionPopup';

function QuestionMenu({ questionId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    setPopupIsVisible(true);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '100px'
          }
        }}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
        <QuestionDeletionPopup
          questionId={questionId}
          popupIsVisible={popupIsVisible}
          setPopupIsVisible={setPopupIsVisible}
          setAnchorEl={setAnchorEl}
        />
      </Menu>
    </div>
  );
}

export default QuestionMenu;
