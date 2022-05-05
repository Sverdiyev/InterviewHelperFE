import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useQueryClient, useMutation } from 'react-query';
import { postUpVote, postDownVote, deleteVote } from '../../services/api-requests/questions.js';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Checkbox from '@mui/material/Checkbox';
import { yellow, grey, green, red } from '@mui/material/colors';
import { Grid } from '@mui/material';

function QuestionActions({ questionVote, userVote, questionId }) {
  const [voteCount, setVoteCount] = useState(questionVote);
  const [currentUserVote, setCurrentUserVote] = useState(userVote);
  const queryClient = useQueryClient();

  const upVoteMutation = useMutation((value) => postUpVote(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const downVoteMutation = useMutation((value) => postDownVote(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const deleteMutation = useMutation((value) => deleteVote(value), {
    onSuccess: () => queryClient.invalidateQueries('questions')
  });

  const handleVote = (value) => {
    // insert logged in user id and here
    const data = { userId: 1, questionId: questionId };
    if (currentUserVote == value) {
      deleteMutation.mutate(data, {
        onSuccess: () => {
          setCurrentUserVote(null);
          value == 'up' ? setVoteCount(voteCount - 1) : setVoteCount(voteCount + 1);
        }
      });
    } else if (value == 'up' && currentUserVote == 'down') {
      upVoteMutation.mutate(data, {
        onSuccess: () => {
          setCurrentUserVote(value);
          setVoteCount(voteCount + 2);
        }
      });
    } else if (value == 'down' && currentUserVote == 'up') {
      downVoteMutation.mutate(data, {
        onSuccess: () => {
          setCurrentUserVote(value);
          setVoteCount(voteCount - 2);
        }
      });
    } else if (value == 'up') {
      upVoteMutation.mutate(data, {
        onSuccess: () => {
          setCurrentUserVote(value);
          setVoteCount(voteCount + 1);
        }
      });
    } else if (value == 'down') {
      downVoteMutation.mutate(data, {
        onSuccess: () => {
          setCurrentUserVote(value);
          setVoteCount(voteCount - 1);
        }
      });
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
