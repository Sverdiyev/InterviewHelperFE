import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { postComment, useComments } from '../../services/api-requests/comments.js';
import { CircularProgress, Grid } from '@mui/material';
import Comment from './Comment.jsx';

function QuestionComments({ commentsContent, setSectionOpen }) {
  const [newComment, setNewComment] = useState('');
  const queryClient = useQueryClient();

  const handleCommentsClose = () => {
    setSectionOpen(false);
  };
  const handleAddComment = () => {
    const commentToAdd = {
      commentContent: newComment,
      questionId: commentsContent.id,
      creationDate: new Date()
    };
    addCommentMutation.mutate(commentToAdd);
    setNewComment('');
  };

  const addCommentMutation = useMutation((value) => postComment(value), {
    onSuccess: () => {
      queryClient.invalidateQueries(`${commentsContent.id}-comments`);
    }
  });

  const { data: comments, isSuccess, isLoading } = useComments(commentsContent.id);

  if (isLoading) {
    return (
      <>
        {isLoading && (
          <Grid
            container
            alignItems="center"
            flexGrow="1"
            sx={{ paddingBottom: '5%', width: '15%', marginLeft: '50%' }}>
            <CircularProgress size="30%" />
          </Grid>
        )}
      </>
    );
  }
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText
            sx={{ fontSize: '2rem', fontWeight: 'bold' }}
            primary={commentsContent.questionContent}
          />
          <IconButton onClick={() => handleCommentsClose()}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        {isSuccess && (
          <div style={{ overflowY: 'scroll', maxHeight: '200px' }}>
            {comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        )}
        {comments.length === 0 && (
          <span style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>No comments </span>
        )}
        <ListItem
          sx={{
            '& .MuiListItem-root': { paddingRight: 0 }
          }}>
          <TextField
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ width: '100%' }}
            placeholder="Enter comment"
            multiline
            maxRows={4}
          />
          <IconButton
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 30 }
            }}
            onClick={() => handleAddComment()}>
            <AddCircleIcon />
          </IconButton>
        </ListItem>
      </List>
    </>
  );
}

export default QuestionComments;
