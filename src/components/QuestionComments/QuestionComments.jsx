import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Comment from './Comment.jsx';

function QuestionComments({ comments, sectionHeader }) {
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="center">
          <ListItemText sx={{ fontSize: '2rem', fontWeight: 'bold' }} primary={sectionHeader} />
        </ListItem>
        {comments.length !== 0 &&
          comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        {comments.length === 0 && <div>No Comments Found</div>}
      </List>
    </>
  );
}

export default QuestionComments;
