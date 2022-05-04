import { useState } from 'react';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Checkbox from '@mui/material/Checkbox';
import { yellow, grey, green, red } from '@mui/material/colors';
import { Grid } from '@mui/material';

function QuestionActions({ questionVote, userVote }) {
  const [voteCount, setVoteCount] = useState(questionVote);
  const [currentUserVote, setCurrentUserVote] = useState(userVote);

  const handleVote = (value) => {
    if (currentUserVote == value) {
      setCurrentUserVote(null);
      if (value == 'up') {
        setVoteCount(voteCount - 1);
      } else {
        setVoteCount(voteCount + 1);
      }
    } else if (value == 'up' && currentUserVote == 'down') {
      setCurrentUserVote('up');
      setVoteCount(voteCount + 2);
    } else if (value == 'down' && currentUserVote == 'up') {
      setCurrentUserVote('down');
      setVoteCount(voteCount - 2);
    } else if (value == 'up') {
      setCurrentUserVote('up');
      setVoteCount(voteCount + 1);
    } else if (value == 'down') {
      setCurrentUserVote('down');
      setVoteCount(voteCount - 1);
    }
  };

  return (
    <>
      <span>{voteCount > 0 ? '+' + voteCount : voteCount}</span>
      <Grid container direction="column">
        <Checkbox
          icon={<ArrowDropUpSharpIcon />}
          checkedIcon={<ArrowDropUpSharpIcon />}
          checked={currentUserVote == 'up'}
          onClick={() => handleVote('up')}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 50 },
            color: grey[800],
            '&.Mui-checked': {
              color: green[600]
            }
          }}
        />
        <Checkbox
          icon={<ArrowDropDownSharpIcon />}
          checkedIcon={<ArrowDropDownSharpIcon />}
          checked={currentUserVote == 'down'}
          onClick={() => handleVote('down')}
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 50 },
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
