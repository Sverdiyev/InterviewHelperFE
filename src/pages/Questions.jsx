import { CircularProgress, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddQuestionPopup from '../components/AddQuestion/AddQuestionPopup.jsx';
import FloatingAddQuestions from '../components/AddQuestion/FloatingAddQuestions.jsx';
import Cart from '../components/Cart/Cart.jsx';
import FloatingQuestionsCart from '../components/Cart/FloatingQuestionsCart.jsx';
import Question from '../components/Question/Question.jsx';
import Search from '../components/Search/Search.jsx';
import { useQuestions } from '../services/api-requests/questions.js';
import { decodeQueryParams } from '../services/helpers.js';
import CartContext from '../store/cart-context.js';

function Questions() {
  const [searchParams] = useSearchParams();

  const cartCtx = useContext(CartContext);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [searchValues, setSearchValues] = useState(decodeQueryParams(searchParams));

  const { data, error, isSuccess, isLoading } = useQuestions(searchValues);

  const [cartIsVisible, setCartIsVisible] = useState(false);
  return (
    <>
      <Grid container justifyContent="space-around" sx={{ width: '80%', marginLeft: 'auto' }}>
        <Grid item sx={{ width: '69%' }}>
          <AddQuestionPopup popupIsVisible={popupIsVisible} setPopupIsVisible={setPopupIsVisible} />
          <Search searchValues={searchValues} setSearchValues={setSearchValues} />
          {isLoading && (
            <Grid
              container
              alignItems="center"
              flexGrow="1"
              sx={{ paddingBottom: '5%', width: '15%' }}>
              <CircularProgress size="30%" />
            </Grid>
          )}
          {error && <div>error</div>}
          {isSuccess &&
            data.map((question) => (
              <Question
                key={question.id}
                questionIsInCart={cartCtx.cartQuestions.some((item) => item === question.id)}
                setInCart
                {...question}
              />
            ))}
          {isSuccess && data.length === 0 && <div>No Questions Found</div>}
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          flexDirection="column"
          sx={{ width: '30%', marginBottom: '1rem' }}>
          <Grid sx={{ backgroundColor: 'pink', height: '50vh', position: 'sticky', top: 0 }}>
            Comments
          </Grid>
          {cartIsVisible && (
            <Grid sx={{ maxHeight: '40vh', position: 'sticky', bottom: '5px' }}>
              <Cart />
            </Grid>
          )}
        </Grid>
      </Grid>
      <FloatingQuestionsCart setCartIsVisible={setCartIsVisible} />
      <FloatingAddQuestions setPopupIsVisible={setPopupIsVisible} />
    </>
  );
}

export default Questions;
