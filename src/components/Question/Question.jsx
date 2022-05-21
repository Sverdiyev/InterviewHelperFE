import React from 'react';
import QuestionActions from './QuestionActions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { grey } from '@mui/material/colors';
import { Card, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  textAlign: 'left',
  width: '100%',
  padding: '1rem',
  marginBottom: '1rem'
});
const StyledCardActions = styled(CardActions)({
  padding: 0,
  gap: '5px',
  '.MuiButton-root': { paddingTop: 0, paddingBottom: 0 }
});

function Question({
  id,
  creationDate,
  complexity,
  questionContent,
  note,
  vote,
  tags,
  userVote,
  isUserFavourite,
  questionIsInCart,
  setCommentsContent,
  setSectionOpen
}) {
  const handleCommentsOpen = () => {
    setSectionOpen(true);
    setCommentsContent({ id, questionContent });
  };
  return (
    <StyledCard variant="outlined" component={Grid} container direction="column">
      <QuestionHeading questionId={id} complexity={complexity} questionContent={questionContent} />
      <Grid container justifyContent="space-between" alignContent="space-between">
        <QuestionBody
          creationDate={creationDate}
          note={note || 'No Description Added'}
          tags={tags}
        />
        <StyledCardActions>
          <QuestionActions
            questionVote={vote}
            userVote={userVote}
            questionId={id}
            isUserFavourite={isUserFavourite}
            questionIsInCart={questionIsInCart}
          />
        </StyledCardActions>
      </Grid>
      <IconButton
        variant="contained"
        size="small"
        color="success"
        style={{
          marginTop: '1rem',
          backgroundColor: 'white',
          color: grey[800],
          maxWidth: '30px'
        }}
        onClick={() => handleCommentsOpen()}>
        <CommentIcon />
      </IconButton>
    </StyledCard>
  );
}

export default Question;
