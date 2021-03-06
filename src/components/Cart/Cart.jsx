import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { downloadQuestions } from '../../services/api-requests/questions.js';
import CartContext from '../../store/cart-context.js';
import CartQuestion from './CartQuestion.jsx';
import PrintIcon from '@mui/icons-material/Print';
import ClearIcon from '@mui/icons-material/Clear';

function Cart() {
  const cartCtx = useContext(CartContext);
  const chosenQuestionsIds = cartCtx.cartQuestions;

  const queryClient = useQueryClient();
  const queryData = queryClient.getQueriesData('questionsFetch')[0];
  let allQuestions = [];
  if (queryData[1]) allQuestions = queryData[1];

  const chosenQuestions = allQuestions.filter((item) => chosenQuestionsIds.includes(item.id));

  const exportHandler = () => {
    const requestData = {
      interviewDate: new Date(),
      intervieweePosition: '',
      questions: chosenQuestionsIds
    };
    downloadQuestions(requestData)
      .then((res) => res.blob())
      .then((blob) => {
        const fileWindow = window.open();
        const file = fileWindow.URL.createObjectURL(blob);
        fileWindow.location.assign(file);
      });
  };

  const clearhandler = () => cartCtx.clearCart();

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography gutterBottom variant="subtitle1">
              Chosen Questions
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton size="small" variant="outlined" onClick={cartCtx.toggleCart}>
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>
        {chosenQuestions.length === 0 && (
          <span style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>
            No Questions added to cart
          </span>
        )}
        <div style={{ overflowY: 'auto', maxHeight: '190px' }}>
          {chosenQuestions.map((question) => (
            <CartQuestion
              key={question.id + 'questionCart'}
              questionId={question.id}
              questionContent={question.questionContent}
            />
          ))}
        </div>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="space-evenly">
          <Button
            disabled={chosenQuestionsIds.length == 0}
            size="small"
            variant="outlined"
            startIcon={<PrintIcon />}
            onClick={exportHandler}>
            Export
          </Button>
          <Button size="small" variant="outlined" startIcon={<ClearIcon />} onClick={clearhandler}>
            Clear
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Cart;
