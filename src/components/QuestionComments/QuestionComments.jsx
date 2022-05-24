import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { postComment, useComments } from '../../services/api-requests/comments.js';
import { Card, CircularProgress, Grid, Typography, List, ListItem } from '@mui/material';
import { produceTimeStamp } from '../../services/helpers';
import Comment from './Comment.jsx';

function QuestionComments({ commentsContent, setSectionOpen, setCommentsContent }) {
  const [newComment, setNewComment] = useState('');
  const queryClient = useQueryClient();

  const handleCommentsClose = () => {
    setSectionOpen(false);
    setCommentsContent(null);
  };
  const handleAddComment = () => {
    const UtcDate = new Date();
    const timeStamp = produceTimeStamp(UtcDate, UtcDate.getTimezoneOffset());
    const commentToAdd = {
      commentContent: newComment,
      questionId: commentsContent.id,
      creationDate: timeStamp
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
    <Card variant="outlined">
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
          <Grid container>
            <Grid item xs={10}>
              <Typography gutterBottom variant="subtitle1" sx={{ textAlign: 'center' }}>
                {commentsContent.questionContent}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                size="small"
                variant="outlined"
                onClick={handleCommentsClose}
                sx={{ borderColor: 'rgba(0, 0, 0, 0.12)' }}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </ListItem>
        {isSuccess && (
          <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
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
    </Card>
  );
}

export default QuestionComments;
