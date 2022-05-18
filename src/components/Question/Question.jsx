import React from 'react';
import QuestionActions from './QuestionActions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';
import Button from '@mui/material/Button';
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
  setDrawerOpen,
  setComments
}) {
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    setComments(`${questionContent}`);
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
          />
        </StyledCardActions>
      </Grid>
      <Button
        variant="contained"
        size="small"
        color="success"
        style={{
          marginTop: '1rem',
          backgroundColor: 'white',
          fontStyle: 'italic',
          fontWeight: 'bold',
          color: grey[800]
        }}
        endIcon={<CommentIcon />}
        onClick={() => handleDrawerOpen()}>
        Open Comments
      </Button>
    </StyledCard>
  );
}

export default Question;
