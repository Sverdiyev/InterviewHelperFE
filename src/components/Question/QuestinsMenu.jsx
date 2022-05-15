import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditQuestionComponent from '../EditQuestion/EditQuestionComponent.js';

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
    setEditPopupIsVisible(true);
    console.log(id);
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

      <EditQuestionComponent open={editPopupIsVisible} setAnchorEl={setAnchorEl} />
    </div>
  );
}

export default QuestionMenu;
