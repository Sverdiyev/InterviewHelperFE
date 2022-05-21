import { useContext, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { useQueryClient, useMutation } from 'react-query';
import { postVote, deleteVote } from '../../services/api-requests/questions.js';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { grey, green, red } from '@mui/material/colors';
import { Grid, Checkbox } from '@mui/material';
import CartContext from '../../store/cart-context.js';

function QuestionActions({
  questionVote,
  userVote,
  questionId,
  questionIsInCart,
  setCommentsContent,
  setSectionOpen,
  questionContent
}) {
  const cartCtx = useContext(CartContext);

  const [voteCount, setVoteCount] = useState(questionVote);
  const [currentUserVote, setCurrentUserVote] = useState(userVote);

  const queryClient = useQueryClient();
  const [voteActive, setVoteActive] = useState(true);

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

  const handleVote = (value) => {
    setVoteActive(false);
    if (currentUserVote == value) {
      deleteVoteMutation.mutate(questionId);
    } else if (value == 'up') {
      upVoteMutation.mutate(questionId);
    } else if (value == 'down') {
      downVoteMutation.mutate(questionId);
    }
  };

  const handleCart = (e) => {
    if (e.target.checked) {
      cartCtx.addToCart(questionId);
      if (!cartCtx.cartIsOpen) cartCtx.toggleCart();
    } else cartCtx.removeFromCart(questionId);
  };

  const handleCommentsOpen = () => {
    setSectionOpen(true);
    setCommentsContent({ id: questionId, questionContent });
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
          checked={questionIsInCart}
          icon={<PlaylistAddIcon />}
          checkedIcon={<PlaylistAddCheckIcon />}
          onClick={handleCart}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            }
          }}
        />
        <Checkbox
          checked={questionIsInCart}
          icon={<CommentIcon />}
          onClick={handleCommentsOpen}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 32 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            }
          }}
        />
      </Grid>
    </>
  );
}

export default QuestionActions;
