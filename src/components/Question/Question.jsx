import QuestionActions from './QuestionActions.jsx';
import QuestionBody from './QuestionBody.jsx';
import QuestionHeading from './QuestionHeading.jsx';

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
  setSectionOpen,
  questionCommentsOpen
}) {
  return (
    <StyledCard variant="outlined" component={Grid} container direction="column">
      <QuestionHeading
        questionId={id}
        complexity={complexity}
        questionContent={questionContent}
        isUserFavourite={isUserFavourite}
        setCommentsContent={setCommentsContent}
        setSectionOpen={setSectionOpen}
      />
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
            questionIsInCart={questionIsInCart}
            questionContent={questionContent}
            setSectionOpen={setSectionOpen}
            setCommentsContent={setCommentsContent}
            questionCommentsOpen={questionCommentsOpen}
          />
        </StyledCardActions>
      </Grid>
    </StyledCard>
  );
}

export default Question;
