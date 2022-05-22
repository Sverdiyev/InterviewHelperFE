import { useMutation, useQueryClient } from 'react-query';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { deleteFavourite, postFavourite } from '../../services/api-requests/questions.js';
import { Checkbox } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

function QuestionFavorite({ questionId, isUserFavourite }) {
  const [userFavourite, setUserFavourite] = useState(isUserFavourite);
  const [favouriteActive, setFavouriteActive] = useState(true);

  const queryClient = useQueryClient();

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
    if (userFavourite) {
      deleteFavouriteMutation.mutate(questionId);
    } else {
      addFavouriteMutation.mutate(questionId);
    }
  };

  return (
    <>
      <Checkbox
        icon={<StarOutlineIcon />}
        checkedIcon={<StarIcon />}
        checked={userFavourite}
        disabled={!favouriteActive}
        onClick={() => handleFavourite()}
        sx={{
          color: grey[800],
          '&.Mui-checked': {
            color: yellow[600]
          },
          '&.Mui-disabled': {
            color: grey[800]
          }
        }}
      />
    </>
  );
}

export default QuestionFavorite;
