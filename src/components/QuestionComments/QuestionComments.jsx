import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Comment from './Comment.jsx';

function QuestionComments({ comments, sectionHeader, setSectionHeader }) {
  const handleCommentsClose = () => {
    setSectionHeader('');
  };
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="center">
          <ListItemText sx={{ fontSize: '2rem', fontWeight: 'bold' }} primary={sectionHeader} />
          <IconButton onClick={() => handleCommentsClose()}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        {comments.length !== 0 &&
          comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        {comments.length === 0 && <div>No Comment Found</div>}
      </List>
    </>
  );
}

export default QuestionComments;
