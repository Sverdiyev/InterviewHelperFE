import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useQueryClient, useMutation } from 'react-query';
import { postVote, deleteVote } from '../../services/api-requests/questions.js';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { yellow, grey, green, red } from '@mui/material/colors';
import { Grid, Checkbox } from '@mui/material';

function QuestionActions({ questionVote, userVote, questionId }) {
  const [voteCount, setVoteCount] = useState(questionVote);
  const [currentUserVote, setCurrentUserVote] = useState(userVote);
  const queryClient = useQueryClient();

  const upVoteMutation = useMutation((value) => postVote(value, 'upvote'), {
    onSuccess: () => {
      currentUserVote == 'down'
        ? setVoteCount((voteCount) => voteCount + 2)
        : setVoteCount((voteCount) => voteCount + 1);
      setCurrentUserVote('up');
      queryClient.invalidateQueries('questions');
    }
  });

  const downVoteMutation = useMutation((value) => postVote(value, 'downvote'), {
    onSuccess: () => {
      currentUserVote == 'up'
        ? setVoteCount((voteCount) => voteCount - 2)
        : setVoteCount((voteCount) => voteCount - 1);
      setCurrentUserVote('down');
      queryClient.invalidateQueries('questions');
    }
  });

  const deleteMutation = useMutation((value) => deleteVote(value), {
    onSuccess: () => {
      setCurrentUserVote(null);
      currentUserVote == 'up'
        ? setVoteCount((voteCount) => voteCount - 1)
        : setVoteCount((voteCount) => voteCount + 1);
      queryClient.invalidateQueries('questions');
    }
  });

  const handleVote = (value) => {
    // insert logged in user id and here
    const data = { userId: 1, questionId: questionId };
    if (currentUserVote == value) {
      deleteMutation.mutate(data);
    } else if (value == 'up') {
      upVoteMutation.mutate(data);
    } else if (value == 'down') {
      downVoteMutation.mutate(data);
    }
  };

  return (
    <>
      <span>{voteCount > 0 ? '+' + voteCount : voteCount}</span>
      <Grid container direction="column">
        <Checkbox
          icon={<ThumbUpOffAltIcon />}
          checkedIcon={<ThumbUpAltIcon />}
          checked={currentUserVote == 'up'}
          onClick={() => handleVote('up')}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            }
          }}
        />
        <Checkbox
          icon={<ThumbDownOffAltIcon />}
          checkedIcon={<ThumbDownAltIcon />}
          checked={currentUserVote == 'down'}
          onClick={() => handleVote('down')}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: red[600]
            }
          }}
        />
      </Grid>
      <Grid container direction="column">
        <Checkbox
          icon={<PlaylistAddIcon />}
          checkedIcon={<PlaylistAddCheckIcon />}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            }
          }}
        />
        <Checkbox
          icon={<StarOutlineIcon />}
          checkedIcon={<StarIcon />}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: yellow[600]
            }
          }}
        />
      </Grid>
    </>
  );
}

export default QuestionActions;
