import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useQueryClient, useMutation } from 'react-query';
import {
  postVote,
  deleteVote,
  postFavourite,
  deleteFavourite
} from '../../services/api-requests/questions.js';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { yellow, grey, green, red } from '@mui/material/colors';
import { Grid, Checkbox } from '@mui/material';

function QuestionActions({ questionVote, userVote, questionId, isUserFavourite }) {
  const [voteCount, setVoteCount] = useState(questionVote);
  const [currentUserVote, setCurrentUserVote] = useState(userVote);
  const [userFavourite, setUserFavourite] = useState(isUserFavourite);
  const queryClient = useQueryClient();
  const [voteActive, setVoteActive] = useState(true);
  const [favouriteActive, setFavouriteActive] = useState(true);

  const upVoteMutation = useMutation((value) => postVote(value, 'upvote'), {
    onSuccess: () => {
      currentUserVote == 'down'
        ? setVoteCount((voteCount) => voteCount + 2)
        : setVoteCount((voteCount) => voteCount + 1);
      setCurrentUserVote('up');
      queryClient.invalidateQueries('questionsFetch');
      setVoteActive(true);
    },
    onError: () => {
      setVoteActive(true);
    }
  });

  const downVoteMutation = useMutation((value) => postVote(value, 'downvote'), {
    onSuccess: () => {
      currentUserVote == 'up'
        ? setVoteCount((voteCount) => voteCount - 2)
        : setVoteCount((voteCount) => voteCount - 1);
      setCurrentUserVote('down');
      queryClient.invalidateQueries('questionsFetch');
      setVoteActive(true);
    },
    onError: () => {
      setVoteActive(true);
    }
  });

  const deleteVoteMutation = useMutation((value) => deleteVote(value), {
    onSuccess: () => {
      setCurrentUserVote(null);
      currentUserVote == 'up'
        ? setVoteCount((voteCount) => voteCount - 1)
        : setVoteCount((voteCount) => voteCount + 1);
      queryClient.invalidateQueries('questionsFetch');
      setVoteActive(true);
    },
    onError: () => {
      setVoteActive(true);
    }
  });

  const addFavouriteMutation = useMutation((value) => postFavourite(value), {
    onSuccess: () => {
      setUserFavourite(true);
      queryClient.invalidateQueries('questionsFetch');
      setFavouriteActive(true);
    },
    onError: () => {
      setFavouriteActive(true);
    }
  });

  const deleteFavouriteMutation = useMutation((value) => deleteFavourite(value), {
    onSuccess: () => {
      setUserFavourite(false);
      queryClient.invalidateQueries('questionsFetch');
      setFavouriteActive(true);
    },
    onError: () => {
      setFavouriteActive(true);
    }
  });

  const handleFavourite = () => {
    setFavouriteActive(false);
    const data = questionId;
    if (userFavourite) {
      deleteFavouriteMutation.mutate(data);
    } else {
      addFavouriteMutation.mutate(data);
    }
  };

  const handleVote = (value) => {
    setVoteActive(false);
    const data = questionId;
    if (currentUserVote == value) {
      deleteVoteMutation.mutate(data);
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
          disabled={!voteActive}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            },
            '&.Mui-disabled': {
              color: grey[800]
            }
          }}
        />
        <Checkbox
          icon={<ThumbDownOffAltIcon />}
          checkedIcon={<ThumbDownAltIcon />}
          checked={currentUserVote == 'down'}
          onClick={() => handleVote('down')}
          disabled={!voteActive}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: red[600]
            },
            '&.Mui-disabled': {
              color: grey[800]
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
          checked={userFavourite}
          disabled={!favouriteActive}
          onClick={() => handleFavourite()}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: yellow[600]
            },
            '&.Mui-disabled': {
              color: grey[800]
            }
          }}
        />
      </Grid>
    </>
  );
}

export default QuestionActions;
