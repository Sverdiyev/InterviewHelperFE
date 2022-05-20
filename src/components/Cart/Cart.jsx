import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { useQueryClient } from 'react-query';
import CartContext from '../../store/cart-context.js';
import CartQuestion from './CartQuestion.jsx';

function Cart() {
  const cartCtx = useContext(CartContext);
  const chosenQuestionsIds = cartCtx.cartQuestions;

  const queryClient = useQueryClient();
  const queryData = queryClient.getQueriesData('questionsFetch')[0];
  let allQuestions = [];
  if (queryData[1]) allQuestions = queryData[1];

  const chosenQuestions = allQuestions.filter((item) => chosenQuestionsIds.includes(item.id));

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cart
        </Typography>
        {chosenQuestions.map((question) => (
          <CartQuestion
            key={question.id + 'questionCart'}
            questionId={question.id}
            questionContent={question.questionContent}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Export Questions</Button>
        <Button size="small">Clear Questions</Button>
      </CardActions>
    </Card>
  );
}

export default Cart;
