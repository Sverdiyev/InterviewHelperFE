import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditQuestionPopup from '../EditQuestion/EditQuestionPopup';

function QuestionMenu({ id }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [editPopupIsVisible, setEditPopupIsVisible] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '100px'
          }
        }}>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      <EditQuestionPopup
        editPopupIsVisible={editPopupIsVisible}
        questionId={id}
        setEditPopupIsVisible={setEditPopupIsVisible}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
}

export default QuestionMenu;
